fetch("https://engaurav.github.io/mealApp/assets/data/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //
    favouriteList(data);
  }, true);
let mealList = [];
let mealFavData = [];

function favouriteList(data) {
  console.log("Fav List", data);
  let favHtmlContainer = document.getElementById("favourite");
  for (key in data) {
    // console.log("Key",data[key]);
    mealList = window.localStorage.getItem(key);
    mealList = JSON.parse(mealList);
    console.log(mealList);

    if (mealList) {
      mealList.sort();
      mealFavData = data[key].filter((val, index) => {
        return mealList.includes(index);
      });
    } else {
      mealFavData = [];
    }
    console.log("Fav Data", mealFavData);
    mealFavData.map((data, index) => {
      let favHtml = ` <div class="favourite-item-container">
            <a href="./singleItem.html?meal=${key}&index=${
        mealList[index]
      }" class="meal-item-link">
              <img
                class="meal-item-img"
                src=".${data.img}"
              />
              <div class="meal-item-name">${data.name}</div>
              <p class="meal-item-detail">
                ${data.detail}
              </p>
            </a>
            <div id="unfavourite">
              <button onclick='makeUnfavourite(${JSON.stringify(key)},${
        mealList[index]
      })'>Unfavourite</button>
            </div>
          </div>`;
      favHtmlContainer.innerHTML += favHtml;
    });
  }
}

function makeUnfavourite(meal, index) {
  console.log("meal", meal);
  if (window.localStorage.getItem(meal)) {
    let mealFavList = JSON.parse(window.localStorage.getItem(meal));
    mealFavList = mealFavList.filter((value, ind) => {
      return value !== index;
    });
    window.localStorage.setItem(meal, JSON.stringify(mealFavList));
  }
  window.location.reload();
}
