/*  
When a section is active, change logo, change color of text in the menu, change background color of the panel
*/

function aboutActive() {
  var x = document.getElementById("logo_black");
  var y = document.getElementById("logo_grey");
  x.style.display = "block";
  y.style.display = "none";
  console.log("test1");
  document.getElementById("aboutActive").style.color = "rgb(245, 61, 31)";
  document.getElementById("servicesActive").style.color = "rgb(31, 30, 29)";
}
function servicesActive() {
  var x = document.getElementById("logo_black");
  var y = document.getElementById("logo_grey");
  console.log("test1");
  x.style.display = "none";
  y.style.display = "block";
  document.getElementById("servicesActive").style.color = "rgb(245, 61, 31)";
  document.getElementById("aboutActive").style.color = "rgb(230, 230, 230)";
}

function updateStageOne() {
  sectionOption().firstSection();
  colorNavigationBar().firstSection();
}

function updateStageTwo() {
  sectionOption().secondSection();
  colorNavigationBar().secondSection();
}

function sectionOption() {
  let toggleLogo = new Object();
  const BLOCK = "block";
  const NONE = "none";
  let logoGray = document.querySelector("#logo_grey");
  let logoBlack = document.querySelector("#logo_black");

  toggleLogo.firstSection = function () {
    logoGray.style.display = NONE;
    logoBlack.style.display = BLOCK;
  };

  toggleLogo.secondSection = function () {
    logoGray.style.display = BLOCK;
    logoBlack.style.display = NONE;
  };
  return toggleLogo;
}

function colorNavigationBar() {
  let section = new Object();
  const navigationBarElements = document.querySelector(".navigation ul").children;
  const isNavigationElementsRendered = () => navigationBarElements.length !== 0;

  section.firstSection = function () {
    if (!isNavigationElementsRendered()) return;
    navigationBarElements[0].classList.add("navigation-section-one");
    navigationBarElements[0].classList.remove("navigation-section-one-not-selected");
  };
  section.secondSection = function () {
    if (!isNavigationElementsRendered()) return;
    navigationBarElements[1].classList.add("navigation-section-two");
    navigationBarElements[0].classList.add("navigation-section-one-not-selected");
  };
  return section;
}
