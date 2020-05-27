import React,{useState} from 'react';
// import './App.css';


export default function ImageList({images}) {

  const [query,setQuery] = useState("")

  return (
    <div>
      {images.map((image,key) => <img src={image.urls.regular} key={key}/>)}
    </div>
  );
}