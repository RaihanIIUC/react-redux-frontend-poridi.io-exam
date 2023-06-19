const initialState  = {
    clientList : [],
}

const myReducer = ( state = initialState, action ) =>{

    if (action.type === "UPDATE_SHIRT_LIST") {
      return { ...state, shirtList: action.payload };
    } else if (action.type === "UPDATE_CURRENT_SHIRT") {
      return { ...state, currentShirt: action.payload };
    } else {
      return state;
    }
}

export default myReducer;