document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons with the class 'b'
    var buttons = document.querySelectorAll(".b");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Get the link from the data-link attribute
            var link = button.getAttribute("data-link");

            // Navigate to the link
            if (link) {
                window.location.href = link;
            }
        });
    });
});