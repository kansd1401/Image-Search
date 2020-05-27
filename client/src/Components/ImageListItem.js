import React from 'react';

export default function ImageListItem({images}) {

  const [query,setQuery] = useState("")

  return (
    <div>
      {images.map((image,key) => <img src={image.urls.regular} key={key}/>)}
    </div>
  );
}