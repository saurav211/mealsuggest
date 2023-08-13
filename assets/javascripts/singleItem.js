let urlParams = new URLSearchParams(window.location.search);
let meal = urlParams.get("meal");
let index = urlParams.get("index");

let datas;

fetch("https://engaurav.github.io/mealApp/assets/data/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //
    // console.log(data);

    for (const key in data) {
      // console.log(key,data[key]);
      if (key === meal) {
        datas = data[key][index];
      }
    }

    mealItemList(datas);
  });

function mealItemList(mealData) {
  var mealItemContainer = document.getElementById("main");

  // let mealItem = "<div id='main'><h1 id='meal-item-name'>Baked Khichdi Recipe</h1><h3 id='meal-item-detail'>Rice Casserole | One Pot Recipe Challenge</h3><img id='meal-item-image' src='../assets/images/breakfast/b1.jpg'><p >Hey hello</p><br><h4>RECIPE VIDEO</h4><iframe id='meal-item-video' src='https://www.youtube.com/embed/-1Mo3cGvFZw?autoplay=1' frameborder='0' allowfullscreen='allowfullscreen'></iframe><br><br><div id='recipe-card'><h4>RECIPE CARD</h4><h5>INGREDIENTS:</h5><ul><li>oil - 2 tbsp</li></ul><h5>RECIPE STEPS:</h5><ul id='meal-item-recipe-step'><li>Heat up a casserole in medium flame</li></ul></div></div>";
  let mealItem = `<h1 id="meal-item-name">${mealData.name} Recipe</h1>
    <h3 id="meal-item-detail">${mealData.detail}</h3>
    <img id="meal-item-image" src=".${mealData.img}">
    <p >Hey Foodies,
        Don’t you feel lazy at times to cook a dish? What comes up to you?
        I basically look to make a simple, healthy and easy to make..
        If that’s one pot, icing on the cake!
    </p><br>
    <h4>RECIPE VIDEO</h4>
    <iframe id="meal-item-video" src="https://www.youtube.com/embed/${
      mealData.url
    }?autoplay=1" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    <br><br>
    
    <div id="recipe-card">
        <h4>RECIPE CARD</h4>
        <h5>INGREDIENTS:</h5>
        <ul>
           ${datas.ingredient
             .map((list) => {
               return `<li>${list}</li>`;
             })
             .join("")}
        </ul>
        <h5>RECIPE STEPS:</h5>
        <ul id="meal-item-recipe-step">
        ${datas.steps
          .map((list) => {
            return `<li>${list}</li>`;
          })
          .join("")}
        </ul>
    </div>`;
  mealItemContainer.innerHTML += mealItem;
}

// myParam = parseInt(myParam,10);

// console.log(meal);
// console.log(index);
