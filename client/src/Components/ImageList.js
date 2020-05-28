import React,{useState} from 'react';
import ImageListItem from './ImageListItem'
import classNames from 'classnames'
import './ImageList.scss'
import axios from 'axios'



export default function ImageList({images, accessKey}) {
  const [query,setQuery] = useState("")
  // const buttonClass = classNames("button", {
  //   "button--confirm": props.confirm,
  //   "button--danger": props.danger
  // });
  const onDownload = (id) => {
    window.open(`https://unsplash.com/photos/${id}/download?force=true`, "_blank");
    axios.get(`https://unsplash.com/photos/${id}/download?force=true`, {
            params: { 
              client_id: accessKey
            }
        })
        .then((res) => {
          console.log(res)
        })
        .catch(() => {
          console.log("Rate Limit Exceeded")
        })
  }

  return (
    <div className="list">
      {images.map((image,key) => <ImageListItem image={image} key={key} onDownload={() => onDownload(image.id)}/>)}
    </div>
  );
}