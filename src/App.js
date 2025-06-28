import React from 'react';
import Item from './components/Item.js';
import './styles/main.css';

export default function App() {
  return (
    <div className="app">
      <h1>Coastal Curator</h1>
      {/* Placeholder to preview an item */}
      <Item name="Message in a Bottle" />
    </div>
  );
}
