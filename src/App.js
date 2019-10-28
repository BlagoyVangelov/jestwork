import React from 'react';
import './App.css';

import PaintingCategoriesList from './components/PaintingCategoriesList';
import FurnituresList from './components/FurnituresList';

function App() {
    return (
        <div className="app">
            <PaintingCategoriesList/>
            <FurnituresList />
        </div>
    );
}

export default App;
