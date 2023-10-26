document.addEventListener("DOMContentLoaded", function () {
    // Get references to the checkbox input element and the menu icon
    var checkbox = document.getElementById("view");
    var menuIcon = document.querySelector(".topmenu4-expand");

    // Function to open the menu
    function openMenu() {
        checkbox.checked = true;
    }

    // Function to close the menu
    function closeMenu() {
        checkbox.checked = false;
    }

    // Toggle the menu when the menu icon is clicked
    menuIcon.addEventListener("click", function () {
        if (checkbox.checked) {
            closeMenu(); // Close the menu if it's open
        } else {
            openMenu(); // Open the menu if it's closed
        }
    });
});