import React,{useState} from 'react';
import ImageListItem from './ImageListItem'
// import './App.css';


export default function ImageList({images}) {

  const [query,setQuery] = useState("")

  return (
    <div> 
      <div>
       {images.map((image,key) => <ImageListItem image={image} key={key}/>)}
      </div>
    </div>
  );
}