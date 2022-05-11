// the fetch method allows me to recieve the API from the site.
fetch("https://rickandmortyapi.com/api/character")
//the 'then' method allows me to connect the data to my site.
    .then(response => response.json())
    .then(data => MakeGen(data.results))
// running the function to see if it's connected to the DOM
    function MakeGen(run){
        console.log(run)}
        