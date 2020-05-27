import React,{useState} from 'react';
// import './App.css';


export default function SearchBar({onClick}) {

  const [query,setQuery] = useState("")

  return (
    <div>
      <input type="text" name="name" placeholder="Search" onChange={event => setQuery(event.target.value)}/>
      <button onClick={() => onClick(query)}>Submit</button>
    </div>

  );
}