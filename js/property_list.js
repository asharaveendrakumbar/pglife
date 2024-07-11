window.addEventListener("load", function () {
    var is_interested_images = document.getElementsByClassName("is-interested-image");
    Array.from(is_interested_images).forEach(element => {
        element.addEventListener("click", function (event) {
            var XHR = new XMLHttpRequest();
            var property_id = event.target.getAttribute("property_id");

            // On success
            XHR.addEventListener("load", toggle_interested_success);

            // On error
            XHR.addEventListener("error", on_error);

            // Set up request
            XHR.open("GET", "api/toggle_interested.php?property_id=" + property_id);

            // Initiate the request
            XHR.send();

            document.getElementById("loading").style.display = 'block';
            event.preventDefault();
        });
    });
});
$(document).ready(function () {
    // Function to toggle active state for filter buttons
    function toggleActiveState(button) {
        button.addClass('btn-active').siblings().removeClass('btn-active');
    }

    // Filter properties based on selected gender
    $('#filter-modal button[data-gender-filter]').on('click', function () {
        var selectedGender = $(this).data('gender-filter');

        if (selectedGender === 'all') {
            $('.property-card').show();
        } else {
            $('.property-card').hide();
            $('.property-card[data-gender="' + selectedGender + '"]').show();
        }

        toggleActiveState($(this));
    });

    // Sort properties by rent
    $('.filter-bar .col-auto img').on('click', function () {
        var sortType = $(this).attr('alt');

        if (sortType === 'sort-desc') {
            // Sort by highest rent first
            $('.property-card').sort(function (a, b) {
                return $(b).find('.rent').data('rent') - $(a).find('.rent').data('rent');
            }).appendTo('.page-container');
        } else if (sortType === 'sort-asc') {
            // Sort by lowest rent first
            $('.property-card').sort(function (a, b) {
                return $(a).find('.rent').data('rent') - $(b).find('.rent').data('rent');
            }).appendTo('.page-container');
        }
        

        document.addEventListener("DOMContentLoaded", function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const gender = button.getAttribute('data-gender');
                    // Perform filtering based on the selected gender
                    // You can update the property listing accordingly
                    console.log('Filtering by gender:', gender);
                    // Example: You may want to reload the page with gender as a query parameter
                    // window.location.href = 'property_list.php?gender=' + gender;
                });
            });
        });
        
        toggleActiveState($(this).siblings('span'));
    });
});

var toggle_interested_success = function (event) {
    document.getElementById("loading").style.display = 'none';

    var response = JSON.parse(event.target.responseText);
    if (response.success) {
        var property_id = response.property_id;

        var is_interested_image = document.querySelectorAll(".property-id-" + property_id + " .is-interested-image")[0];
        var interested_user_count = document.querySelectorAll(".property-id-" + property_id + " .interested-user-count")[0];

        if (response.is_interested) {
            is_interested_image.classList.add("fas");
            is_interested_image.classList.remove("far");
            interested_user_count.innerHTML = parseFloat(interested_user_count.innerHTML) + 1;
        } else {
            is_interested_image.classList.add("far");
            is_interested_image.classList.remove("fas");
            interested_user_count.innerHTML = parseFloat(interested_user_count.innerHTML) - 1;
        }
    } else if (!response.success && !response.is_logged_in) {
        window.$("#login-modal").modal("show");
    }
};
