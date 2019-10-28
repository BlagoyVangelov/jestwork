import {
	ADD_FURNITURE,
	REMOVE_FURNITURE
} from '../constants/actionTypes';

const furnituresList = (state=[], action) => {
	switch(action.type) {
		case ADD_FURNITURE:
			return [
				...state,
				action.payload.furniture
			];
		case REMOVE_FURNITURE: 
			return state.filter((furniture, index) => furniture.id !== action.payload.furnitureId);
		default: 
			return state;
	}	
};

export default furnituresList;