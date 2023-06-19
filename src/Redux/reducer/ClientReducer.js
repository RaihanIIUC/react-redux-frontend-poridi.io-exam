 import { ActionType } from "../ActionType";

const clientState = {
   clients : []
 };

const ClientReducer = (state = clientState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_CLIENT_LIST:
      return { ...state, clients: action.payload };

    default:
      return state;
  }
};

export default ClientReducer;