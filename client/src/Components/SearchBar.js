import React,{useState} from 'react';
import {InputGroup,FormControl, Button} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
// import './App.css';


export default function SearchBar({onClick}) {

  const [query,setQuery] = useState("")

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        placeholder="Search" onChange={event => setQuery(event.target.value)}
      />
      <InputGroup.Append>
        <Button onClick={() => onClick(query)} variant="outline-secondary"><FaSearch/></Button>
      </InputGroup.Append>
    </InputGroup>

  );
}