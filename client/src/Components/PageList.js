import React,{useState, useEffect} from 'react';
import PageListItem from './PageListItem'
import {GrCaretNext, GrCaretPrevious} from 'react-icons/gr'
import { Button } from 'react-bootstrap';
// import './App.css';

//Determines if the there is an option to view the next page of Images otherwise Disables the button
function PageButton({active, previous}){
  if (active){
    return (
      <Button variant="primary">
        {previous ? <GrCaretPrevious/>: <GrCaretNext/>}
      </Button>
    )
  }
  else{
    return (
      <Button variant="secondary" disabled>
        {previous === true ? <GrCaretPrevious/>: <GrCaretNext/>}
      </Button>
    )
  }
}


export default function ImageList({page, pageLength}) {

  return (
    <div> {/* if page > 1 that means previous button needs to be active and if the current page is less than the total pages next button should be active*/}
      <PageButton active={page > 1} previous={true}/>
      <div>{page}</div>
      <PageButton active={page < pageLength} previous={false}/>
    </div>
  );
}