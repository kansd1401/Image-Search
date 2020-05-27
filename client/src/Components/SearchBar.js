import React from 'react';
// import './App.css';

export default function SearchBar({onClick}) {
  

  return (
    <div>
      <input type="text" name="name" placeholder="Search" />
      <button onClick={onClick}>Submit</button>
    </div>

  );
}