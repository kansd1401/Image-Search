import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar'

function App() {
  return (
    <div className="App">
      <SearchBar onClick={() => console.log("yikes")}/>
    </div>
  );
}

export default App;
