import React from 'react';
import {Button} from 'react-bootstrap'
import {MdFileDownload} from 'react-icons/md'


export default function ImageListItem({image, onDownload}) {

  return (
    <div className="item">
      <img className="item__image" src={image.urls.regular}/>
      <div className="item__info">
        <div className="item__info--owner">
          <img src={image.user.profile_image.medium}/>
          <h2>{image.user.name}</h2>
        </div>
        <Button variant="outline-dark" onClick={onDownload}>
          <MdFileDownload size={38}/>
        </Button>
      </div>
    </div>
  );
}