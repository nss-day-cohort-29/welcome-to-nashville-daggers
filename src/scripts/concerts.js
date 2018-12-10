const concertData = {
    getConcerts() {
        return fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=lXF5cl6UEBDo2U4Mdnab2ATtQajczyPi"
)
.then(results => results.json())
.then(post => console.log(post));
    }
};
concertData.getConcerts();

// const concertData = {
//     getConcertInfo() {
//         return fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=lXF5cl6UEBDo2U4Mdnab2ATtQajczyPi")
//             .then(response => response.json())
//             .then(concertReturn => {
//                 console.log(concertReturn)
//             })
//         }};
// concertData.getConcertInfo();


// fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=lXF5cl6UEBDo2U4Mdnab2ATtQajczyPi"
// )
// .then(results => results.json())
// .then(post => console.log(post));


// const concertData = {
//     getConcerts() {
//       return fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=lXF5cl6UEBDo2U4Mdnab2ATtQajczyPi")
//       // .then(function(response){
//       //   response.json();
//       // })
//       .then(concertResponse => concertResponse.json());
//     }
// }

// console.log(concertData);
