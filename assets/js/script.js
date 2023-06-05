// var apiKey = "http://www.omdbapi.com/?s=thor&apikey=1fb9d06f";

  function buildString() {
    //pulls the input value 
    let inputValue = document.getElementById("searchbox").value
    var urlString = "http://www.omdbapi.com/?s="
    var apiKey = "&apikey=1fb9d06f"

    //concat all the variables together in the correct order
    var buildURL = urlString + inputValue + apiKey
                  //"http://www.omdbapi.com/?s=thor&apikey=1fb9d06f"
    console.log(buildURL)    
    
    return buildURL
     
  }

  
  

  // function getInputValue() {
  //   let inputValue = document.getElementById("searchbox").value
  //   // console.log("input value from getInputValue func")
  //   console.log(inputValue)
  //   buildString(inputValue)
  //   return inputValue
  // }

  function getApi() {
    // Insert the API url to get a list of your repos
    var requestUrl = (apiKey);
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //looping over the fetch response and inserting the URL of your repos into a list
        console.log(data)
        });
  }

// var apiKey = buildString()
// getApi()

