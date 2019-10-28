import React from 'react';
import PropTypes from 'prop-types';

const Furniture = ({furniture, removeFurniture}) => {
	return <li>
		<a href="#" data-id={furniture.id}>{furniture.name}</a>
		<button onClick={() => removeFurniture(furniture.id)}>Remove</button>
	</li>;
};

Furniture.propTypes = {
    furniture: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.string
    }),
    removeFurniture: PropTypes.func
};

export default Furniture;