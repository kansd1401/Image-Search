import React,{useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar'
import ImageList from './Components/ImageList'
import axios from 'axios';
require('dotenv').config();

const accessKey = process.env.REACT_APP_ACCESS_KEY

function App() {
  const [images,setImages] = useState(null)

  const onSearch = (query) => {
    axios.get('https://api.unsplash.com/search/photos', {
            params: { 
              query: query,
              per_page: 20,
              client_id: accessKey
            }
        })
        .then((res) => {
          console.log(res)
          setImages(res.data.results)
        })
  }

  return (
    <div className="App">
      <SearchBar onClick={onSearch}/>
      {images && <ImageList images={images}/>}
    </div>
  );
}

export default App;
