import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Furniture from './Furniture';
import InputField from './InputField' 
import { addNewFurniture, removeExistingFurniture } from '../actions'

const FurnituresList = ({furnitures, addFurniture, removeFurniture}) => {
	console.log(furnitures)
	const addNewFurniture = () => {
		const dummyFurnitures = ['arm chair', 'ottoman', 'media console', 'sofa']

		const rand = dummyFurnitures[Math.floor(Math.random() * dummyFurnitures.length)];

		const newFurniture = {
			id: furnitures.length + 1,
			name: rand
		}

		addFurniture(newFurniture);
	};

	const removeExistingFurniture = furnitureId => removeFurniture(furnitureId);

	return <React.Fragment>
		<ul>
			{
				furnitures.map((furniture, index) =>
					<Furniture key={index} 
							   furniture={furniture} 
							   removeFurniture={removeExistingFurniture}
					/>
				)
			}
		</ul>
		<button className="add-btn" onClick={addNewFurniture}>Add Furniture</button>
		<br /><br />
		<div>
			<InputField />
		</div>
	</React.Fragment>;

};

FurnituresList.defaultProps = {
	furnituresList: []
};

FurnituresList.propTypes = {
	furnitures: PropTypes.array,
	addFurniture: PropTypes.func, 
	removeFurniture: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
	return {
		furnitures: state.furnituresList
	}
};

const mapDispatchToProps = dispatch => {
	return {
		addFurniture: furniture => dispatch(addNewFurniture(furniture)),
		removeFurniture: furnitureId => dispatch(removeExistingFurniture(furnitureId))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(FurnituresList);