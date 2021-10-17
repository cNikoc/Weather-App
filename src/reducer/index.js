const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "ADD_CITY":
      if (state.some(item => item.name === action.payload.name)) 
        alert("Looking for the same city again? Better try another ...");
      else if (state.length === 4) 
        alert("Ups! Too many cities here, removing...");
      else if (action.payload.name === undefined) 
        alert("Ups! we don't have that city right now... try another one!");
      else {
      return [
          ...state,
          action.payload
      ]};
      break;    
    case "REMOVE_CITY": return state.filter(city => city.id !== action.payload);  
    default: return state; 
  };
};

export default reducer;