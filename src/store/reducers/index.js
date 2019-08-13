import { SET_USER_TOKEN, ADD_VEHICLE} from "../actions/action-types";

const initialState = {
  user: {
      token: null,
      vehicles: []
  }
};

function rootReducer(state = initialState, action) {
  switch(action.type){
		case SET_USER_TOKEN:
			return Object.assign({}, state, {
      			user: {
					  token: action.payload
				}
    		});
		case ADD_VEHICLE : 
			return Object.assign({}, state, {
      			repositories: action.payload
    		});
    	default :
    		return state;
	}
};
export default rootReducer;