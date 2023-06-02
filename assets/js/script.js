var apiKey = "1fb9d06f";

function getApi() {
    // Insert the API url to get a list of your repos
    var requestUrl = 'http://www.omdbapi.com/?s=thor&apikey=1fb9d06f';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //looping over the fetch response and inserting the URL of your repos into a list
        console.log(data)
        });
  }


getApi()


