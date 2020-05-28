import React,{useState, useEffect} from 'react';
import {GrCaretNext, GrCaretPrevious} from 'react-icons/gr'
import { Button } from 'react-bootstrap';
import './PageList.scss';

//Determines if the there is an option to view the next page of Images otherwise Disables the button
function PageButton({active, previous, onClick}){
  if (active){
    return (
      <Button variant="primary" onClick={onClick} >
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


export default function PageList({page, pageLength, prevPage, nextPage}) {

  return (
    <div className="pagebar"> {/* if page > 1 that means previous button needs to be active and if the current page is less than the total pages next button should be active*/}
      <PageButton onClick={prevPage} active={page > 1} previous={true}/>
      <div>{page}</div>
      <PageButton onClick={nextPage} active={page < pageLength} previous={false}/>
    </div>
  );
}