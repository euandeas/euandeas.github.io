const btn = document.querySelector(".btn-toggle");
const btn2 = document.querySelector(".btn-toggle2");
const icon = document.querySelector(".theme-icon");
const icon2 = document.querySelector(".theme-icon2");
const logo = document.getElementById("logo");
const logo2 = document.getElementById("logo2");
const linkedin = document.getElementById("linkedinicon");
const instagram = document.getElementById("instaicon");
const github = document.getElementById("githubicon");
const menu = document.querySelector(".menu-icon");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  setDark();
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
  setLight();
}
else{
  if (!prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = "light";
    setLight();
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = "dark";
    setDark();
  }
  localStorage.setItem("theme", theme);
}

btn.addEventListener("click", function () {
  changeTheme();
});

btn2.addEventListener("click", function () {
  changeTheme();
});

function changeTheme(){
  if (localStorage.getItem("theme") == "dark") {
    document.body.classList.toggle("light-theme");
    var theme = "light";
    setLight();
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = "dark";
    setDark();
  }
  localStorage.setItem("theme", theme);
}

function setDark(){
  logo.src = "/assets/logowcb.png"
  logo2.src = "/assets/logowcb.png"
  icon.src = "/assets/moon.svg";
  icon2.src = "/assets/moon.svg";
  linkedin.src = "/assets/linkedindark.svg";
  instagram.src = "/assets/instagramdark.svg";
  github.src = "/assets/githubdark.svg";
  menu.src = "/assets/menudark.svg";
}

function setLight(){
  logo.src = "/assets/logocb.png"
    logo2.src = "/assets/logocb.png"
    icon.src = "/assets/sun.svg";
    icon2.src = "/assets/sun.svg";
    linkedin.src = "/assets/linkedin.svg";
    instagram.src = "/assets/instagram.svg";
    github.src = "/assets/github.svg";
    menu.src = "/assets/menu.svg";
}