// MEETUP API FUNCTION
const meetup = {
  getMeetup() {
    return fetch(
      "https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&sort_by=date",
      {
        headers: {
          authorization: "Bearer 6N5OUUJLQ4DKLVS36OOK"
        }
      }
    )
      .then(response => response.json())
      .then(post => console.log(post));
  }
};
meetup.getMeetup();
