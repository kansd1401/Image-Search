import React from 'react';
import {Button} from 'react-bootstrap'
import {MdFileDownload} from 'react-icons/md'
import axios from 'axios'
import './ImageList.scss'

export default function ImageListItem({image}) {

  const onClick = () => {

  }

  return (
    <div className="item">
      <img className="item__image" src={image.urls.regular}/>
      <div className="item__info">
        <div className="item__info--owner">
          <img src={image.user.profile_image.medium}/>
          <h2>{image.user.name}</h2>
        </div>
        <Button variant="outline-dark">
          <MdFileDownload size={38}/>
        </Button>
      </div>
    </div>
  );
}