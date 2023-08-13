let mealData;
fetch("https://engaurav.github.io/mealApp/assets/data/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    mealData = data;
    // displaySearch(data, "P");
  }, true);

console.log("Hello");

let search = document.getElementById("search");
const inputHandler = function (e) {
  // console.log(e.target.value);
  displaySearch(mealData, e.target.value);
};

search.addEventListener("input", inputHandler);

function displaySearch(datas, searchItem) {
  let searchHtmlContainer = document.getElementById("search-display");
  searchHtmlContainer.innerHTML = "";
  searchHtmlContainer.style.display = "block";
  //   console.log(searchItem);

  for (key in datas) {
    // console.log("Key",key)
    datas[key].map((data, index) => {
      //   console.log(data);
      //   console.log("match", data.name.includes(searchItem));
      if (data.name.includes(searchItem)) {
        let searchHtml = `<a href="./html/singleItem.html?meal=${key}&index=${index}">${data.name}</a>`;
        searchHtmlContainer.innerHTML += searchHtml;
      }
    });
  }
  if (searchHtmlContainer.innerHTML.length == 0) {
    searchHtmlContainer.innerHTML = "<a href='#'>Not Matched Item </a>";
  }
  if (searchItem.length <= 0) {
    searchHtmlContainer.innerHTML = "";
  }
}

// Javascript to handle sidebar
let sidebar = false;
function handleSideBar() {
  let sideBarContainer = document.getElementById("navbar-media");
  let searchContainer = document.getElementById("search-container");
  let navLinkContainer = document.getElementById("navlinks-container");
  if (sidebar) {
    sideBarContainer.style.height = "0px";
    searchContainer.style.display = "none";
    if (window.innerWidth <= 600) {
      navLinkContainer.style.height = "0px";
    }
    sidebar = false;
  } else {
    searchContainer.style.display = "block";
    sideBarContainer.style.height = "305px";
    if (window.innerWidth <= 600) {
      navLinkContainer.style.height = "auto";
    }
    sidebar = true;
  }
}

//Javascript to Maintain Navbar as it is after media query

// handle nav links for max width
function handleNavLinkMax(x) {
  if (x.matches) {
    // If media query matches
    document.getElementById("navlinks-container").style.height = "auto";
  }
}

var x = window.matchMedia("(min-width: 600px)");
handleNavLinkMax(x); // Call listener function at run time
x.addListener(handleNavLinkMax); // Attach listener function on state changes

// handle nav links for min width
function handleNavLinkMin(x2) {
  if (x2.matches) {
    // If media query matches
    document.getElementById("navlinks-container").style.height = "0px";
  }
}

var x2 = window.matchMedia("(max-width: 600px)");
handleNavLinkMin(x2); // Call listener function at run time
x2.addListener(handleNavLinkMin); // Attach listener function on state changes

// handle search container for min width
function handleSearchContainerMin(y) {
  if (y.matches) {
    // If media query matches
    document.getElementById("search-container").style.display = "block";
    document.getElementById("navbar-media").style.height = "0px";
  }
}

var y = window.matchMedia("(min-width: 930px)");
handleSearchContainerMin(y); // Call listener function at run time
y.addListener(handleSearchContainerMin); // Attach listener function on state changes


// handle search container for min width
function handleSearchContainerMax(y2) {
  if (y2.matches) {
    // If media query matches
    document.getElementById("search-container").style.display = "none";
    document.getElementById("navbar-media").style.height = "0px";
  }
}

var y2 = window.matchMedia("(max-width: 930px)");
handleSearchContainerMax(y2); // Call listener function at run time
y2.addListener(handleSearchContainerMax); // Attach listener function on state changes
