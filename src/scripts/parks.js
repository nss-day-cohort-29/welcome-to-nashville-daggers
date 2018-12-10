// fetch("https://data.nashville.gov/resource/xbru-cfzi.json/?$$app_token=Vf74GVgJuBMgE8pKXy0iQ4HFm")
// .then(res => res.json())
// .then(post => console.log(post));

const parksData = {
  getParksInfo() {
      return fetch("https://data.nashville.gov/resource/xbru-cfzi.json/?$$app_token=Vf74GVgJuBMgE8pKXy0iQ4HFm", {
          Authorization: {
            Bearer: "Vf74GVgJuBMgE8pKXy0iQ4HFm",
          }})
          .then(response => response.json())
          .then(parksReturn => {
              console.log(parksReturn)
          })
      }};
parksData.getParksInfo();