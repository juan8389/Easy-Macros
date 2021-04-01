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
            console.log(response.hits[0].recipe.image);
          });

    }

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var query = $("#search_recipe").val();
        console.log(query)
        searchRecipe(query)

    })
})
