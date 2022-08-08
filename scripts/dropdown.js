const icon = document.querySelector(".menu-icon");
const dropdown = document.getElementsByClassName("dropdown-content")

icon.addEventListener("click", function () {
    if (dropdown.style.display == "none") {
        dropdown.style.display = "block"
    } else {
        dropdown.style.display = "none"
    }
})