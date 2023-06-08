

  function buildString() {
    //pulls the input value 
    let inputValue = document.getElementById("searchbox").value;
    var urlString = "http://www.omdbapi.com/?type=movie&s="
    var apiKey = "&apikey=1fb9d06f"

    //concat all the variables together in the correct order
    var buildURL = urlString + inputValue + apiKey
                  //"http://www.omdbapi.com/?s=thor&apikey=1fb9d06f"
    
    return buildURL
     
  }



  function getApi() {
    // Insert the API url to get a list of your repos
    var requestUrl = buildString();
  
    document.getElementById("results").innerHTML = "";

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function ({Search}) {
        //using arrow function and looping over the fetch response and inserting the URL of your repos into a list
          Search.forEach(movie => {
            const { Poster } = movie;
            //retrieves imdb id
            const { imdbID } = movie;
            //href combines the first part of the link with the imdb id 
            results.innerHTML += `
              <div class="card">
              <a href=https://www.imdb.com/title/${imdbID}/><img src=${Poster} />
              </div>
            `;
            
            console.log(movie);
            console.log(`https://www.imdb.com/title/${imdbID}/`);
            
          });
        });
    
  }


//event listener for click and  getApi function
document.getElementById("submit").addEventListener("click", getApi);
var input = document.getElementById("myInput");
addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});