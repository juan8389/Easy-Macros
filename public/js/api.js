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
           
  
           //not sure how to retrieve date from a loop. when i loop within the loop ¯\_(ツ)_/¯ git add
            if (response) {
              for (var i=0; i < 3; i++) {
                console.log(response.hits[i].recipe.digest[i].total);
            }
            }
           $("#recipe-macros").html(
             "<b>Macros: <b/>" + "" + (Math.round(response.hits[i].recipe.digest[0].total)) + "g Fats<b/>" + " " +
             (Math.round(response.hits[i].recipe.digest[1].total)) + "g Carbs<b/>" + " " +
             (Math.round(response.hits[i].recipe.digest[2].total)) + "g Proteins<b/>"
             ); 
  
          
   
         
  });
         
          
  
    }
  
    $("#submit").on("click", function (event) {
        event.preventDefault();
        var query = $("#search_recipe").val();
        console.log(query)
        searchRecipe(query)
        
  
    })
  })
  