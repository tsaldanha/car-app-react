import {SET_USER_TOKEN, ADD_VEHICLE} from "./action-types";

export function setUserToken(payload){
	return { type: SET_USER_TOKEN, payload}
};

export function addVehicle(payload){
	return { type: ADD_VEHICLE, payload}
};

