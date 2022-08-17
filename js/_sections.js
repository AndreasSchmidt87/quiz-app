export default function navigation() {
const navbarHome = document.querySelector('[data-js="home__nav"]');
const navbarAdd = document.querySelector('[data-js="addQuestion__nav"]');
const navbarBookmark = document.querySelector('[data-js="bookmark__nav"]');
const navbarProfile = document.querySelector('[data-js="profile__nav"]');

const navigationItems = [navbarHome, navbarAdd, navbarBookmark, navbarProfile];

const homePage = document.querySelector('[data-js="homePage"]');
const questionPage = document.querySelector('[data-js="addPage"]');
const profilePage = document.querySelector('[data-js="profilePage"]');
const bookmarkPage = document.querySelector('[data-js="bookmarkPage"]');

const pages = [homePage, questionPage, bookmarkPage, profilePage]; 
console.log(navbarHome);
navbarHome.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    homePage.classList.remove("hidden");

    navigationItems.forEach((item) => {
      item.classList.remove("navigation__item--active");
    });
    navbarHome.classList.add("navigation__item--active");
  });

  navbarAdd.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    questionPage.classList.remove("hidden");
    navigationItems.forEach((item) => {
      item.classList.remove("navigation__item--active");
    });
    navbarAdd.classList.add("navigation__item--active");
  });

  navbarBookmark.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    bookmarkPage.classList.remove("hidden");
    navigationItems.forEach((item) => {
      item.classList.remove("navigation__item--active");
    });
    navbarBookmark.classList.add("navigation__item--active");
  });

  navbarProfile.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    profilePage.classList.remove("hidden");
    navigationItems.forEach((item) => {
      item.classList.remove("navigation__item--active");
    });
    navbarProfile.classList.add("navigation__item--active");
  });
}