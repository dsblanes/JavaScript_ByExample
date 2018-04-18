var OMDB_API_URL = "http://www.omdbapi.com/?apikey=289a3d18&";

function getOMDBResults(title) {
  //let's make sure the field isn't empty
  if (title.length == 0) {
    $("#result").html("Please enter text into the search field");
  } else {
    //if a search term is entered...we'll start the search process
    //we can build the URL string to execute the HTTP GET request using $.get
    $.get(OMDB_API_URL + "t=" + title, function(searchResult) {
      console.log(searchResult.Title);
      //default response is no results
      var stringOutput = "No results found";

      if (searchResult.Response == "True") { //if the search does return results, we'll display each field and a poster image
        stringOutput = "<p>" + searchResult.Title + "<br>"; //adding result title
        stringOutput += searchResult.Year + "<br>"; //adding result year
        stringOutput += searchResult.Released + "<br>"; //adding result release date
        stringOutput += searchResult.Actors + "<br>"; //adding result actor list
        stringOutput += "<img src='" + searchResult.Poster + "'>";
        stringOutput += "</p>"; //closing paragraph tag
      }
      $("#result").html(stringOutput);
    });
  }
};



$("#searchBtn").on('click', function(e) {
  e.preventDefault();
  getOMDBResults($("#searchField").val());
});

