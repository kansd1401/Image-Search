import React,{useState} from 'react';
import ImageListItem from './ImageListItem'
import classNames from 'classnames'
import {Button} from 'react-bootstrap'
import './ImageList.scss'



export default function ImageList({images}) {
  const [view,setView] = useState("list")
  const buttonClass = classNames({
    "list": view === "list",
    "gallery": view === "gallery"
  });

  //Opens a link in a new tab to download the picture
  const onDownload = (id) => {
    window.open(`https://unsplash.com/photos/${id}/download?force=true`, "_blank");
  }

  return (
    <div className="holder">
      <div className="view">
        <h2>View by: </h2>
        <Button variant={view === "list" ? "primary" : "outline-dark"} onClick={() => setView("list")}>List</Button>
        <Button variant={view === "gallery" ? "primary" : "outline-dark"} onClick={() => setView("gallery")}>Gallery</Button>
      </div>
      <div className={buttonClass}>
        {images.map((image,key) => <ImageListItem image={image} key={key} onDownload={() => onDownload(image.id)}/>)}
      </div>
    </div>
  );
}