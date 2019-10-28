import {CHANGE_VALUE} from '../constants/actionTypes';

const inputDefault = (state="", action) => {
	switch(action.type) {
		case CHANGE_VALUE:
			return {id: 1, value: action.payload.value}
		default:
			return state;
	}
};

export default inputDefault;