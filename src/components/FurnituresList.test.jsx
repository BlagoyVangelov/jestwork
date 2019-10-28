import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Furniture from './Furniture'
import FurnituresList from './FurnituresList'
import store from '../store';


describe('test <FurnituresList>', () => {
	const furnitures = [
		{id: 1, name: 'futon'},
		{id: 2, name: 'loveseat'}
	]
	const addFurniture = jest.fn
	const removeFurniture = jest.fn

	configure({adapter: new Adapter()})

	it('should render <Furniture />', () => {
		console.log(furnitures)
		const wrapper = shallow(<FurnituresList 
			addFurniture={addFurniture}
			removeFurniture={removeFurniture}
			store={store}	
		/>)
		expect(wrapper.find(Furniture)).toHaveLength(2)
	})
})
