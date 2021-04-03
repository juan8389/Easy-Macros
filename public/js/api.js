$(document).ready(function () {

    
  // var searchButton = document.getElementById("search_recipe")

  function searchRecipe(query) {
      // console.log("retriving recipes")
      // API Edeman \

        var appID = "6775564b";
        var appKey = "5bd1cfdc845fb142ed758081972100c7";
        var queryURL = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`;

        $.ajax({
          url: queryURL,
          crossDomain: true,
          method: "GET",
          xhrFields: {
            withCredentials: true
          }
        }).then(function (response) {
          console.log(response);
          console.log(response.hits[0].recipe.image);
          console.log(response.hits[0].recipe.url);
          if (response) {
            for (var i=0; i < 3; i++) {
              console.log(response.hits[0].recipe.digest[i].total);
            }
          }
          var recipeImage = response.hits[0].recipe.image;
          var recipeURL = response.hits[0].recipe.url;
          var recipeMacros = response.hits[0].digest[i].total;
          
          console.log(recipeImage);
          console.log(recipeURL);
          console.log(recipeMacros);

          var recipeDiv = $("<div>").addClass("col-lg mx-1");
      recipeDiv.html(`
      <div class="card text-white bg-primary" id="recipe1">
          <div class="card-body">
            <h5 class="recipe-image" id="recipe1">${recipeImage}</h5>
            <div class="recipe-url"><b>URL: </b> ${recipeURL}
            <div class="current-macros"><b>Macros: </b> ${recipeMacros[0]}g 
        </div>
      `);
      

        });
       
        

  }

  $("#submit").on("click", function (event) {
      event.preventDefault();
      var query = $("#search_recipe").val();
      console.log(query)
      searchRecipe(query)
      

  })
})

