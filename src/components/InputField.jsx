import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeInput, addNewFurniture } from '../actions';

const InputField = ({defaultValue, furnitures, changeInputValue, addFurniture}) => {

	const changeDefaultValue  = event => {

		const value = event.target.value
		changeInputValue(value)
	}

	const addNewFurniture = () => {
		const newFurniture = {
			id: furnitures.length + 1,
			name: defaultValue
		}

		addFurniture(newFurniture)

	}

	return <React.Fragment>
		<input type="text" value={defaultValue} onChange={changeDefaultValue} />
		<button className="add-btn" onClick={addNewFurniture}>Add furniture from input</button>
	</React.Fragment>;
};


InputField.propTypes = {
	furnitures: PropTypes.array,
	defaultValue: PropTypes.string,
	changeInputValue: PropTypes.func,
	addFurniture: PropTypes.func
};


const mapStateToProps = state => {
    return {
        defaultValue: state.inputDefault.value,
        furnitures: state.furnituresList
    }
};

const mapDispatchToProps = dispatch => {
	return {
		changeInputValue: value => dispatch(changeInput(value)),
		addFurniture: furniture => dispatch(addNewFurniture(furniture))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(InputField)