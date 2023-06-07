

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
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function ({Search}) {
        //looping over the fetch response and inserting the URL of your repos into a list
          Search.forEach(movie => {
            const { Poster } = movie;

            results.innerHTML += `
              <div class="card">
                <img src=${Poster} />
              </div>
            `;

            console.log(movie);
          });
        });
    
  }
//event listener for getApi function
document.getElementById("submit").addEventListener("click",getApi)

