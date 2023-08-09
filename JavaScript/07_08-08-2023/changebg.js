// target class/id  =  TopHeader
// perform = window 

window.addEventListener("scroll", function () {
    let topHeader = document.getElementById("TopHeader");
    let current = window.scrollY;
    if (current > 0) {
        topHeader.classList.add("headerFixed")
    } else {
        topHeader.classList.remove("headerFixed")
    }
})