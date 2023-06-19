import axios from "axios";
import { ActionType } from "../ActionType";

export const setClientList = (clientList) => {
   return {
    type: ActionType.UPDATE_CLIENT_LIST,
    payload: clientList,
  };
};


export const requestClientList  = (type) => {
    return async (dispatch ,action) => {
    const response = await  axios.get(`http://localhost:5000/clients?client_type=${type}`);
    console.log(response.data.data,'response')
     dispatch(setClientList(response.data.data));
    }
}

export const StoreClient  = (client) => {
  return async (dispatch ,action) => {
    console.log(client,'dddd');
  const response = await  axios.post(`http://localhost:5000/clients`, client);
  console.log(response.data.data,'response')
    }
}