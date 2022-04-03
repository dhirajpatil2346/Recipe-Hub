function postRecipe(event) {
  event.preventDefault();
  var person = {
    name: $("#name").val(),
    email: $("#email").val(),
    recipe: $("#recipe").val(),
  };
  $.ajax({
    url: "https://recipe-web-55ac1-default-rtdb.firebaseio.com/recipe.json",
    type: "post",
    dataType: "json",
    contentType: "application/json",
    success: function (data) {
      console.log("success");
    },
    data: JSON.stringify(person),
  });

  $("#target").text("Your recipe has been posted successfully.");
}
