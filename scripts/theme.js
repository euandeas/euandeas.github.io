const btn = document.querySelector(".btn-toggle");
const icon = document.querySelector(".theme-icon");
const logo = document.getElementById("logo");
const linkedin = document.getElementById("linkedinicon");
const instagram = document.getElementById("instaicon");
const github = document.getElementById("githubicon");
const menu = document.getElementById("menuicon");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  logo.src = "/assets/logowcb.png"
  icon.src = "/assets/moon.svg";
  linkedin.src = "/assets/linkedindark.svg";
  instagram.src = "/assets/instagramdark.svg";
  github.src = "/assets/githubdark.svg";
  menu.src = "/assets/menudark.svg"
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
  logo.src = "/assets/logocb.png"
  icon.src = "/assets/sun.svg";
  linkedin.src = "/assets/linkedin.svg";
  instagram.src = "/assets/instagram.svg";
  github.src = "/assets/github.svg";
  menu.src = "/assets/menu.svg"
}
else{
  if (!prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
  if (theme == "dark"){
    logo.src = "/assets/logowcb.png"
    icon.src = "/assets/moon.svg";
    linkedin.src = "/assets/linkedindark.svg";
    instagram.src = "/assets/instagramdark.svg";
    github.src = "/assets/githubdark.svg";
    menu.src = "/assets/menudark.svg"
  }
  else{
    logo.src = "/assets/logocb.png"
    icon.src = "/assets/sun.svg";
    linkedin.src = "/assets/linkedin.svg";
    instagram.src = "/assets/instagram.svg";
    github.src = "/assets/github.svg";
    menu.src = "/assets/menu.svg"
  }
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
  if (theme == "dark"){
    logo.src = "/assets/logowcb.png"
    icon.src = "/assets/moon.svg";
    linkedin.src = "/assets/linkedindark.svg";
    instagram.src = "/assets/instagramdark.svg";
    github.src = "/assets/githubdark.svg";
    menu.src = "/assets/menudark.svg"
  }
  else{
    logo.src = "/assets/logocb.png"
    icon.src = "/assets/sun.svg";
    linkedin.src = "/assets/linkedin.svg";
    instagram.src = "/assets/instagram.svg";
    github.src = "/assets/github.svg";
    menu.src = "/assets/menu.svg"
  }
});

