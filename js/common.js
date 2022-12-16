const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// const searchInputEl = document.querySelectoro(".search input")

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  b;
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// focus 가 해제 되었을 때
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
