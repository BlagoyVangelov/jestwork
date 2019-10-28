import { ADD_PAINTING_CATEGORY, REMOVE_PAINTING_CATEGORY, ADD_FURNITURE, REMOVE_FURNITURE, CHANGE_VALUE } from '../constants/actionTypes';


/**
 * Change default value of the input field.
 *
 * @param { {value: string} } value
 * @returns {{type, payload: {value: string}}}
 */
export const changeInput = value => {
    return {
        type: CHANGE_VALUE, 
        payload: {
            value
        }
    }
};

/**
 * Add a new paintings category.
 *
 * @param { {id: string|number, name: string} } category
 * @returns {{type, payload: {category: {}}}}}
 */
export const addNewPaintingCategory = category => {
    return {
        type: ADD_PAINTING_CATEGORY,
        payload: {
            category
        }
    }
};

/**
 * Remove an existing painting category by a given id.
 *
 * @param { number } categoryId
 * @returns {{type, payload: {categoryId: number}}}
 */
export const removePaintingCategory = categoryId => {
    return {
        type: REMOVE_PAINTING_CATEGORY,
        payload: {
            categoryId
        }
    }
};

/**
* Add new furniture
*
* @param { {id: string|number, name: string} } furniture
* @returns { {type, payload: {furniture: {}}} }
*/
export const addNewFurniture = furniture => {
    return {
        type: ADD_FURNITURE,
        payload: {
            furniture
        }
    }
};

/**
* Remove an existing furniture by given furnitureId
*
* @param { number } furnitureId
* @returns { { type, payload: {furnitureId: number} } }
*/
export const removeExistingFurniture = furnitureId => {
    return {
        type: REMOVE_FURNITURE, 
        payload: {
            furnitureId
        }
    }
};

