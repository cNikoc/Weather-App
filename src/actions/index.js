export function removeCity(id) {
  return { type: "REMOVE_CITY", payload: id};
}

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

export function addCity(city) {
  return dispatch => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(city => city.json())
    .then(json => { dispatch({ type: "ADD_CITY", payload: json }); })
    .catch(err => console.log(err))
  };
};