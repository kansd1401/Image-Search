import React,{useState} from 'react';
import ImageListItem from './ImageListItem'
import classNames from 'classnames'
// import './App.css';


export default function ImageList({images}) {
  const [query,setQuery] = useState("")
  // const buttonClass = classNames("button", {
  //   "button--confirm": props.confirm,
  //   "button--danger": props.danger
  // });

  return (
    <div> 
      <div>
       {images.map((image,key) => <ImageListItem image={image} key={key}/>)}
      </div>
    </div>
  );
}