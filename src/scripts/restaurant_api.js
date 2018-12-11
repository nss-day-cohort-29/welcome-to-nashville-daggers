
// restaurant API call - Zomato

// Fetch function established.
const diningData = {
    getDiningInfo() {
        return fetch("http://localhost:8088/restaurants")
            // Promise 1.
            .then(response => response.json())
            // Promise 2.
            .then(diningReturn => {
                // Loading first page (20 results) of 3587 total results to console.
                console.log(diningReturn)
            })
        }};
// Calling the function within the object.
diningData.getDiningInfo();
 