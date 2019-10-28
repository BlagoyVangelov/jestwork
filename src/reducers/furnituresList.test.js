import reducer from './furnituresList'
import {
	ADD_FURNITURE,
	REMOVE_FURNITURE
} from '../constants/actionTypes';


describe('furnituresList reducer', () => {

	it('should return a default state', () => {
		const expectedState = []

		expect(reducer([], 'UNDEFINED_ACTION')).toEqual(expectedState)
	})

	it('should handle ADD_FURNITURE action', () => {
		const state = [{id: 1, name: 'futon'}]
		const action = {
			type: ADD_FURNITURE, 
			payload: { 
				furniture: {id: 2, name: 'loveseat'}
			}
		}
		const expectedState = [
			...state.slice(0, 1),
			action.payload.furniture
		]
		expect(reducer(state, action)).toEqual(expectedState)
	})

	it('should handle REMOVE_FURNITURE action', () => {
		const state = [
			{id: 1, name: 'futon'},
			{id: 2, name: 'loveseat'}
		] 
		const action = {
			type: REMOVE_FURNITURE, 
			payload: { furnitureId: 2 }
		}
		const expected_state = [...state.slice(0, 1)]

		expect(reducer(state, action)).toEqual(expected_state)
	})
})