import React,{useState} from 'react';
import {InputGroup,FormControl, Button} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
import './NavBar.scss';


export default function NavBar({onClick}) {

  const [query,setQuery] = useState("")

  return (
    <div className="navBar">
      <h1>Image-Search</h1>
      <div className="navBar--search">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            placeholder="Search" onChange={event => setQuery(event.target.value)}
          />
          <InputGroup.Append>
            <Button onClick={() => onClick(query)} variant="primary"><FaSearch/></Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>

  );
}