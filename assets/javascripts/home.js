// Javascripyt to get Data from Json
// console.log("Hello");
fetch("https://engaurav.github.io/mealApp/assets/data/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //
    breakfastList(data.breakfast); //calling breakFast list funtion to render list breakfast item
    lunchList(data.lunch); //calling lunch list funtion to render list lunch item
    dinnerList(data.dinner); //calling lunch list funtion to render list lunch item
  }, true);

//javascript for breakfast meal : START
function breakfastList(breakfastData) {
  var breakfastMeal = document.getElementById("breakfast");
  let breakfastFavList = window.localStorage.getItem("breakfast");
  if (breakfastFavList) {
    breakfastFavList = JSON.parse(breakfastFavList);
  } else {
    breakfastFavList = [];
  }
  let meall = "breakfast";

  breakfastData.map((data, index) => {
    let mealItem = ` <div class="breakfast-item-container">
        <a href="./html/singleItem.html?meal=breakfast&index=${index}" class="meal-item-link">
            <img class="meal-item-img" src="${data.img}" />
            <div class="meal-item-name">${data.name}</div>
            <p class="meal-item-detail">${data.detail}</p>
        </a>
        <div id="fav-unfav">
            ${
              breakfastFavList.includes(index)
                ? "<button class='unfav' onclick='makeUnfavourite(" +
                  JSON.stringify(meall) +
                  "," +
                  index +
                  ")'>Unfavourite</button>"
                : "<button class='fav' onclick='makeFavourite(" +
                  JSON.stringify(meall) +
                  "," +
                  index +
                  ")'>Favourite</button>"
            }
            <!--<button class="fav" onclick="makeFavourite('breakfast',${index})">Favourite</button> -->
            <!-- <button class="unfav">Unfavourite</button> -->
        </div>
    </div>`;
    breakfastMeal.innerHTML += mealItem;
  });
}

// function for next food item of breakfast
function breakfastNext() {
  var breakfastMeal = document.getElementById("breakfast");
  var breakItem = document.getElementsByClassName("breakfast-item-container");

  breakfastMeal.append(breakItem[0]);
}

// function for previous food item of breakfast
function breakfastPrevious() {
  var breakfastMeal = document.getElementById("breakfast");
  var breakItem = document.getElementsByClassName("breakfast-item-container");
  breakfastMeal.prepend(breakItem[breakItem.length - 1]);
}

//javascript for breakfast meal : end

//javascript for lunch meal : START
function lunchList(lunchData) {
  var lunchMeal = document.getElementById("lunch");
  let lunchfastFavList = window.localStorage.getItem("lunch");
  if (lunchfastFavList) {
    lunchfastFavList = JSON.parse(lunchfastFavList);
  } else {
    lunchfastFavList = [];
  }
  let meall = "lunch";
  lunchData.map((data, index) => {
    let mealItem = ` <div class="lunch-item-container">
    <a href="./html/singleItem.html?meal=lunch&index=${index}" class="meal-item-link">
        <img class="meal-item-img" src="${data.img}" />
        <div class="meal-item-name">${data.name}</div>
        <p class="meal-item-detail">${data.detail}</p>
    </a>
    <div id="fav-unfav">
        ${
          lunchfastFavList.includes(index)
            ? "<button class='unfav' onclick='makeUnfavourite(" +
              JSON.stringify(meall) +
              "," +
              index +
              ")'>Unfavourite</button>"
            : "<button class='fav' onclick='makeFavourite(" +
              JSON.stringify(meall) +
              "," +
              index +
              ")'>Favourite</button>"
        }
        <!--<button class="fav" onclick="makeFavourite('lunch',${index})">Favourite</button> -->
        <!-- <button class="unfav">Unfavourite</button> -->
    </div>
</div>`;
    lunchMeal.innerHTML += mealItem;
  });
}

// function for next food item of lunch
function lunchNext() {
  var lunchMeal = document.getElementById("lunch");
  var breakItem = document.getElementsByClassName("lunch-item-container");

  lunchMeal.append(breakItem[0]);
}

// function for previous food item of lunch
function lunchPrevious() {
  var lunchMeal = document.getElementById("lunch");
  var breakItem = document.getElementsByClassName("lunch-item-container");
  lunchMeal.prepend(breakItem[breakItem.length - 1]);
}

//javascript for lunch meal : End

// JavaScript for Dinner : Start
function dinnerList(dinnerData) {
  var dinnerMeal = document.getElementById("dinner");
  let dinnerfastFavList = window.localStorage.getItem("dinner");
  if (dinnerfastFavList) {
    dinnerfastFavList = JSON.parse(dinnerfastFavList);
  } else {
    dinnerfastFavList = [];
  }
  let meall = "dinner";
  dinnerData.map((data, index) => {
    let mealItem = ` <div class="dinner-item-container">
    <a href="./html/singleItem.html?meal=dinner&index=${index}" class="meal-item-link">
        <img class="meal-item-img" src="${data.img}" />
        <div class="meal-item-name">${data.name}</div>
        <p class="meal-item-detail">${data.detail}</p>
    </a>
    <div id="fav-unfav">
        ${
          dinnerfastFavList.includes(index)
            ? "<button class='unfav' onclick='makeUnfavourite(" +
              JSON.stringify(meall) +
              "," +
              index +
              ")'>Unfavourite</button>"
            : "<button class='fav' onclick='makeFavourite(" +
              JSON.stringify(meall) +
              "," +
              index +
              ")'>Favourite</button>"
        }
        <!--<button class="fav" onclick="makeFavourite('dinner',${index})">Favourite</button> -->
        <!-- <button class="unfav">Unfavourite</button> -->
    </div>
</div>`;
    dinnerMeal.innerHTML += mealItem;
  });
}

// function for next food item of dinner
function dinnerNext() {
  var dinnerMeal = document.getElementById("dinner");
  var breakItem = document.getElementsByClassName("dinner-item-container");

  dinnerMeal.append(breakItem[0]);
}

// function for previous food item of dinner
function dinnerPrevious() {
  var dinnerMeal = document.getElementById("dinner");
  var breakItem = document.getElementsByClassName("dinner-item-container");
  dinnerMeal.prepend(breakItem[breakItem.length - 1]);
}

// JavaScript for Dinner : End

// JavaScript to Handle Favourite unfav of Meal : Start
function makeFavourite(meal, index) {
  //   console.log("meal", meal);
  if (window.localStorage.getItem(meal)) {
    let mealFavList = JSON.parse(window.localStorage.getItem(meal));
    mealFavList.push(index);
    window.localStorage.setItem(meal, JSON.stringify(mealFavList));
  } else {
    let mealFavList = [];
    mealFavList.push(index);
    window.localStorage.setItem(meal, JSON.stringify(mealFavList));
  }
  window.location.reload();
}

function makeUnfavourite(meal, index) {
  //   console.log("meal", meal);
  if (window.localStorage.getItem(meal)) {
    let mealFavList = JSON.parse(window.localStorage.getItem(meal));
    mealFavList = mealFavList.filter((value, ind) => {
      return value !== index;
    });
    window.localStorage.setItem(meal, JSON.stringify(mealFavList));
  }
  window.location.reload();
}

// JavaScript to Handle Favourite unfav of Meal : Emd
