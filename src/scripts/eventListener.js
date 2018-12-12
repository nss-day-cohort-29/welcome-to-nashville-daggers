let searchConcertButton = document.getElementById("show_search_btn");
let concertInput = '';

const concertBtnPress = searchConcertButton.addEventListener("click", function() { 
    console.log("Live Shows Button clicked!");
    concertInput = show_search_bar.value;
    console.log(concertInput);
    concertSearchData.getConcertSearch();
});

console.log(concertInput)

let searchConcertBar = document.getElementById("show_search_bar");
searchConcertBar.addEventListener("click", function() { 
    console.log("Live Shows Bar clicked!");
    console.log(show_search_bar.value);
});

let searchParksButton = document.getElementById("park_search_btn");
searchParksButton.addEventListener("click", function(){ console.log("Parks Button clicked!"); });

let searchRestButton = document.getElementById("dine_search_btn");
searchRestButton.addEventListener("click", function(){ console.log("Restaurants Button clicked!"); });

let searchEventButton = document.getElementById("meet_search_btn");
searchEventButton.addEventListener("click", function(){ console.log("Meetups Button clicked!"); });

// if button = clicked and 


// const eventListeners = {
//     handleSearchButton() {
//       let searchInput = document.querySelector("input[name='searchinput']");
//       let searchQuery = searchInput.value;
  
//       data.queryResources(searchQuery)
//       .then(searchResultsArray => {
//         console.log(searchResultsArray);
//         let resourcesFragments = domComponents.createResourcesDocumentFragments(searchResultsArray);
//         console.log(resourcesFragments);
//         domBuilder.appendAllResources(resourcesFragments);
//       });
//     }
//   };