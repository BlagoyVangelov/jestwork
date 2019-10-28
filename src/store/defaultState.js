/**
 *
 *
 * @type {{paintingsList: [{},{},{},{},{}]}}
 */
const defaultState = {
    paintingsCategoriesList: [
        {id: 1, name: 'landscapes'},
        {id: 2, name: 'portraits'},
        {id: 3, name: 'rivers'},
        {id: 4, name: 'oceans'},
        {id: 5, name: 'mountains'},
    ],
    furnituresList: [
    	{id: 1, name: 'futon'},
    	{id: 2, name: 'loveseat'},
    	{id: 3, name: 'bean bag chair'}
    ],
    inputDefault: {id: 1, value: '' }
};

export default defaultState;
