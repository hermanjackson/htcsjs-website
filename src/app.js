/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const menuLinks = document.querySelector(".nabar__menu");

const mobileMenu = () => {
  menuLinks.classList.toggle("active");
  menuLinks.addEventListener("click", mobileMenu);
};
