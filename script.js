/* 
  Topics discussed:

  How to create tabs menu using position, offsetLeft, offsetWidth, transition, transform, translateX() 
*/

const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");
const contentTag = document.getElementsByClassName("content");
const homeTag = document.querySelector(".home-content");
const servicesTag = document.querySelector(".service-content");
const aboutUsTag = document.querySelector(".aboutus-content");
const contactUsTag = document.querySelector(".contactus-content");
const loginTag = document.querySelector(".login-content");

const tabs = ["home", "services", "about us", "contact us", "login"];

const handleTabChange = (event) => {
  // console.log("id:", event.target.id);
  const clickedTabId = event.target.id;
  const clickedLiTag = document.getElementById(clickedTabId);
  // console.log("clickedLiTag:", clickedLiTag);
  const clickedLiTagWidth = clickedLiTag.offsetWidth;
  const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft;
  // console.log(clickedLiTagOffsetLeft);
  sliderTag.style.width = clickedLiTagWidth + "px";
  sliderTag.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`;

  if (clickedTabId === "1") {
    homeTag.classList.add("showContent");
    servicesTag.classList.remove("showContent");
    aboutUsTag.classList.remove("showContent");
    contactUsTag.classList.remove("showContent");
    loginTag.classList.remove("showContent");
  } else if (clickedTabId === "2") {
    homeTag.classList.remove("showContent");
    servicesTag.classList.add("showContent");
    aboutUsTag.classList.remove("showContent");
    contactUsTag.classList.remove("showContent");
    loginTag.classList.remove("showContent");
  } else if (clickedTabId === "3") {
    servicesTag.classList.remove("showContent");
    aboutUsTag.classList.add("showContent");
    contactUsTag.classList.remove("showContent");
    loginTag.classList.remove("showContent");
    homeTag.classList.remove("showContent");
  } else if (clickedTabId === "4") {
    aboutUsTag.classList.remove("showContent");
    contactUsTag.classList.add("showContent");
    loginTag.classList.remove("showContent");
    servicesTag.classList.remove("showContent");
    homeTag.classList.remove("showContent");
  } else if (clickedTabId === "5") {
    contactUsTag.classList.remove("showContent");
    loginTag.classList.add("showContent");
    homeTag.classList.remove("showContent");
    servicesTag.classList.remove("showContent");
    aboutUsTag.classList.remove("showContent");
  }
};

for (let i = 0; i < tabs.length; i++) {
  const liTag = document.createElement("li");
  liTag.append(tabs[i].toUpperCase());
  liTag.id = i + 1;
  liTag.addEventListener("click", handleTabChange);
  ulTag.append(liTag);

  if (i === 0) {
    sliderTag.style.width = liTag.offsetWidth + "px";
    homeTag.classList.add("showContent");
  }
}
