const gnbs = document.querySelectorAll("#gnb > li");

const gnbThird = gnbs[2];
const gnbFourth = gnbs[3];
const gnbFifth = gnbs[4];
const gnbSixth = gnbs[5];

const navLists = document.querySelectorAll("#gnb > div");

const navBath = navLists[0];
const navUtensils = navLists[1];
const navLiving = navLists[2];
const navCs = navLists[3];

function show(nav) {
  nav.classList.toggle("global-toggle");
}

gnbThird.addEventListener("mouseenter", function () {
  show(navBath);
});
gnbThird.addEventListener("mouseleave", function () {
  show(navBath);
});
gnbFourth.addEventListener("mouseenter", function () {
  show(navUtensils);
});
gnbFourth.addEventListener("mouseleave", function () {
  show(navUtensils);
});
gnbFifth.addEventListener("mouseenter", function () {
  show(navLiving);
});
gnbFifth.addEventListener("mouseleave", function () {
  show(navLiving);
});
gnbSixth.addEventListener("mouseenter", function () {
  show(navCs);
});
gnbSixth.addEventListener("mouseleave", function () {
  show(navCs);
});
