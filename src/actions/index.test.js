import { ADD_FURNITURE, REMOVE_FURNITURE, CHANGE_VALUE } from '../constants/actionTypes';
import { changeInput, addNewFurniture, removeExistingFurniture } from  './index'

describe('FurnituresList action creators', () => {
	it('should create an action to populate inputDefault', () => {
		const inputValue = 'aq'
		const expectedAction = {
			type: CHANGE_VALUE,
			payload: { value: inputValue }
		}

		expect(changeInput(inputValue)).toEqual(expectedAction)
	})

	it('should create an action to add furniture to afurnituresList', () => {
		const newFurniture = {id: 1, name: 'bean bag chair'}
		const expectedAction = {
			type: ADD_FURNITURE,
			payload: {
				furniture: newFurniture
			}
		}

		expect(addNewFurniture(newFurniture)).toEqual(expectedAction)
	})

	it('should create an action to remove furniture to a furnituresList', () => {
		const furnitureId = 1
		const expectedAction = {
			type: REMOVE_FURNITURE, 
			payload: { furnitureId: furnitureId }
		}

		expect(removeExistingFurniture(furnitureId)).toEqual(expectedAction)
	})
})