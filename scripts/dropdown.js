const menuicon = document.querySelector(".menu-toggle");
const dropdown = document.getElementsByClassName("dropdown-content")

menuicon.addEventListener("click", function () {
    if (dropdown[0].style.display == "none") {
        dropdown[0].style.display = "block"
    } else {
        dropdown[0].style.display = "none"
    }
})