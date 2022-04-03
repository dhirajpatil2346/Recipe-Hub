$(document).ready(function () {
  async function loadData() {
    $ = jQuery;
    var token = localStorage.getItem("token");
    token[0] = "";
    let data = await $.get(
      `https://recipe-web-55ac1-default-rtdb.firebaseio.com/recipe.json`
    );
    return data;
  }

  loadData();

  let keys = [];
  let values = [];
  async function setData() {
    let data = await loadData();
    // let keys = Object.keys(data);

    // let values = Object.values(data);

    for (let i in data) {
      console.log(Object.keys(data[i]));
      console.log(Object.values(data[i]));
      keys.push.apply(keys, Object.keys(data[i]));
      console.log(keys);
      values.push.apply(values, Object.values(data[i]));
    }
    console.log(keys);
    console.log(values);
    let j = 0;
    for (let j = 0; j < keys.length; j++) {
      console.log(j);
      $(".container").append(`<h1>${keys[j]}</h1> <p>${values[j]}</p>`);
      if (keys[j] === "recipe") {
        $(".container").append(`<h1 class="m-5">&nbsp;</h1>`);
      }
    }
  }
  setData();
});
