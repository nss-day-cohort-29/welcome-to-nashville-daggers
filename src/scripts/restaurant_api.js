
// restaurant API call - Zomato

// Fetch function established.
const diningData = {
    getDiningInfo() {
        return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city", {
            headers: {
                "user-key": "e1d3af0b02cdacf4bfda4e12e2efcd99",
            }})
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
