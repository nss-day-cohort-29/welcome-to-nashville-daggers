
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

      // The search results and itinerary sections below may need to be in a different function...I have left them commented out for now.
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
                <input type="text" name="concerts" id="show_search" placeholder="Search Concerts by Genre"> 
                <button type="button" id="show_search">Search Live Shows</button>
            </section>    
        </form>`;  
    },
    appendResourceContainers () {
      // Trying to define one large container to horl results and itinerary containers.
      let mainContainer = document.getElementById("display-container");

      // Search container to hold results from inputs.
      const searchContainer = domComponents.createDomElement("article", null, "search-container");
      // Append the "Search Results" string"
      mainContainer.appendChild(domComponents.createDomElement("h3", "Search Results:", null));
      // Append search container to main container
      mainContainer.appendChild(searchContainer);

      // Append itinerary to searcjh if "Saved", *** I think this belongs elsewhere
      //searchContainer.appendChild(itineraryContainer);
      
    }//,
//     appendAllResources (fragmentsObj) {
//       let articlesContainer = document.querySelector("#articles-container");
//       let videosContainer = document.querySelector("#videos-container");
//       articlesContainer.innerHTML = "";
//       videosContainer.innerHTML = "";
//       articlesContainer.appendChild(fragmentsObj.articles);
//       videosContainer.appendChild(fragmentsObj.videos);
//     },
//     appendSearchContainer () {
//       let divContainer = document.querySelector("#display-container");
  
//       const searchContainer = domComponents.createDomElement("article", null, "search-container");
  
//       searchContainer.appendChild(domComponents.createDomElement("label", "Search", null));
//       let searchInput = document.createElement("input");
//       searchInput.setAttribute("type", "text");
//       searchInput.setAttribute("name", "searchinput");
//       searchContainer.appendChild(searchInput);
  
//       let searchButton = domComponents.createDomElement("button", "Search", null);
//       searchButton.setAttribute("id", "search-button");
//       searchButton.addEventListener("click", eventListeners.handleSearchButton);
//       searchContainer.appendChild(searchButton);
  
//       divContainer.appendChild(searchContainer);
//     }
};
//*** move these to main.js for the calls only!!! ***
domBuilder.searchFormBuilder();
domBuilder.appendResourceContainers();
