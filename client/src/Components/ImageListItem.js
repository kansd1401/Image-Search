import React from 'react';

export default function ImageListItem({image}) {

  const download = () => {

  }

  return (
    <div>
      <img src={image.urls.regular}/>
      <div>
        <a href={image.links.download}>
          Download
        </a>
      </div>
    </div>
  );
}