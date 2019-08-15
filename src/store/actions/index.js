import {SET_USER_TOKEN, ADD_VEHICLE, DELETE_VEHICLES, SET_USER_DATA, SET_USER_VEHICLES} from "./action-types";

export function setUserToken(payload){
	return { type: SET_USER_TOKEN, payload}
};

export function addVehicle(payload){
	return { type: ADD_VEHICLE, payload}
};
export function deleteVehicles(payload){
	return { type: DELETE_VEHICLES, payload}
};

export function setUserData(payload){
	return { type: SET_USER_DATA, payload}
};

export function setUserVehicles(payload){
	return { type: SET_USER_VEHICLES, payload}
};