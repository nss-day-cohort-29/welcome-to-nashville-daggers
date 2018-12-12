//CONCERTS

// searchConcertButton targets "show_search_btn" and concertInput sets a variable to store the input in the search live shows search bar
let searchConcertButton = document.getElementById("show_search_btn");
let concertInput = "";

//console logs the user's input to the concert search bar
console.log(concertInput)

// Code below adds click event to the Search Live Shows button
const concertBtnPress = searchConcertButton.addEventListener("click", function() { 
    console.log("Live Shows Button clicked!");
    
    //concert
    concertInput = show_search_bar.value;
    console.log(concertInput);

    //calls concertSearchData and getConcertSearch function from concerts.js, which runs a fetch from the user's input to the concert search bar.
    concertSearchData.getConcertSearch();
});


//PARKS

let searchParksButton = document.getElementById("park_search_btn");
searchParksButton.addEventListener("click", function(){ console.log("Parks Button clicked!"); });

//RESTAURANTS

let searchRestButton = document.getElementById("dine_search_btn");
searchRestButton.addEventListener("click", function(){ console.log("Restaurants Button clicked!"); });

//MEETUPS

let searchEventButton = document.getElementById("meet_search_btn");
searchEventButton.addEventListener("click", function(){ console.log("Meetups Button clicked!"); });
