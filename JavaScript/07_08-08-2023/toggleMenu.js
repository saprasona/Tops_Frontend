// target class / element = nav class
// perform class / element = tbtn class
// change icon - fa-bars class

let btn = document.querySelector(".tbtn");
let navmenu = document.querySelector(".nav")
let icon = document.querySelector(".fa-bars")
btn.addEventListener("click", function () {
    navmenu.classList.toggle("nav-menu")

    if (navmenu.classList.contains("nav-menu") == true) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-close")
    } else {
        icon.classList.remove("fa-close")
        icon.classList.add("fa-bars")
    }
})