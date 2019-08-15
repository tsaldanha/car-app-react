import { SET_USER_TOKEN, ADD_VEHICLE, DELETE_VEHICLES, SET_USER_DATA, SET_USER_VEHICLES} from "../actions/action-types";

const initialState = {
      token: null,
	  vehicles: [],
	  isAuth: false,
};

function rootReducer(state = initialState, action) {
  switch(action.type){
		case SET_USER_TOKEN:
			return Object.assign({}, state, {
				token: action.payload,
				isAuth: true
    		});
		case ADD_VEHICLE : 
			return Object.assign({}, state, {
				vehicles: state.vehicles.concat(action.payload)
		  	});
		case DELETE_VEHICLES : 
			  
			  return Object.assign({},state,{
				vehicles: state.vehicles.filter(item=>{ 
					return item.id !== action.payload
				})
			  })
		case SET_USER_DATA : 
			return Object.assign({}, state, {
				user: action.payload
		  	});
		case SET_USER_VEHICLES : 
			return Object.assign({}, state, {
				vehicles: action.payload,
			});
    	default :
    		return state;
	}
};
export default rootReducer;