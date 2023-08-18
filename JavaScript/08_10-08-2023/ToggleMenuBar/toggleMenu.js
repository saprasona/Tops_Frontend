// target class / element = menubar class
// perform class / element = tbtn class & cbtn class

let openbtn = document.querySelector(".tbtn");
let closebtn = document.querySelector(".cbtn");
let navmenu = document.querySelector(".menubar")
let icon = document.querySelector(".fa-bars")
openbtn.addEventListener("click", function () {
    navmenu.classList.add("menubar-scroll")
})
closebtn.addEventListener("click", function () {
    navmenu.classList.remove("menubar-scroll")
})