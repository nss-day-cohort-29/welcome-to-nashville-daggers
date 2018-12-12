//Initial fetch from Ticketmaster to establish that API is functional

const concertData = {
    getConcerts() {
        fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=lXF5cl6UEBDo2U4Mdnab2ATtQajczyPi")
            .then(results => results.json())
            .then(post => console.log(post));
    }
};
concertData.getConcerts();


//Fetch is linked to concert search and button in eventListener.js. It searches the ticketmaster API, puts the results of the search in JSON, targets specific values in the search results and returns them.
const concertSearchData = {
    getConcertSearch() {
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=lXF5cl6UEBDo2U4Mdnab2ATtQajczyPi&keyword=${concertInput}`)
            .then(results => results.json())
            .then(concerts => {
                //Code below targets the desired information from the search. It will differ between APIs.
                let allconcerts = concerts._embedded.events
                allconcerts.forEach(event => {
                  let concertHTML = event.name
                  console.log(concertHTML)
                // ATTEMPTING TO APPEND CONCERT INFO TO DOM
                //   let displayConcert = document.appendChild(concertHTML)
                //   displayConcert
                });
            })
    }
};

