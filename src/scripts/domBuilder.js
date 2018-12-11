
// Declaring an object to hold our function to build the DOM
const domBuilder =  {
    searchFormBuilder() {
      // Added a function is vanilla JS to initialize cursor on the first input.
      window.onload = function() {
        document.getElementById("park_search").focus();
      };
      // Declare a variable to hold the fields to be created.
      // Picking the id "form-container"
      let userEntryFields = document.getElementById("form-container");
        
      // The search results and itinerary sections below may need to be in a different function...but I have left them visible for now.
      userEntryFields.innerHTML = `
        <form>
          <h1>Welcome to Nashville</h1>
          <fieldset>
            <legend> Search for stuff to do today: </legend>
              <section>
                <input type="text" name="parks" id="park_search" placeholder="Search Parks by Feature" focus> 
                <button type="button" id="park_search">Search Parks</button>
              </br>
                <input type="text" name="restaurants" id="dine_search" placeholder="Search Restaurants by Food Type"> 
                <button type="button" id="dine_search">Search Restaurants</button>
              </br>
                <input type="text" name="meetups" id="meet_search" placeholder="Search Meetups by Topic"> 
                <button type="button" id="meet_search">Search Meetups</button>
              </br>
                <input type="text" name="concerts" id="show_search" placeholder="Search Meetups by Topic"> 
                <button type="button" id="show_search">Search Live Shows</button>
            </section>
          </fieldset>
          <fieldset>
            <legend> Search Results: </legend>
              <section>
              </section>
          </fieldset>
          <fieldset>
            <legend> My Itinerary: </legend>
              <section>
              </section>
          </fieldset>
        </form>`
        return userEntryFields;
    }
};
domBuilder.searchFormBuilder();
