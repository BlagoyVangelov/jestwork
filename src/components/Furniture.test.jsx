import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Furniture from './Furniture'

describe('test <Furniture />', () => {
	const removeFurniture = jest.fn
	const furniture = {id: 1, name: 'futon'}

	configure({adapter: new Adapter()})

	it('should render <li>', () => {	
		const wrapper = shallow(<Furniture
			furniture={furniture}
			removeFurniture={removeFurniture}
		/>)	
		expect(wrapper.find('li')).toHaveLength(1)
	})

	it('should have proper text for the link', () => {
		const wrapper = shallow(<Furniture
			furniture={furniture}
			removeFurniture={removeFurniture}
		/>)			
		expect(wrapper.find(`a`).text()).toContain(furniture.name)
	})

	it('should have proper value of data-id for the link', () => {
		const wrapper = shallow(<Furniture
			furniture={furniture}
			removeFurniture={removeFurniture}
		/>)			
		expect(wrapper.find(`a`).prop('data-id')).toEqual(furniture.id)
	})

})