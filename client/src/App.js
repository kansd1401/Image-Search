import React,{useState,useEffect} from 'react';
import './App.scss';
import NavBar from './Components/NavBar'
import ImageList from './Components/ImageList'
import PageList from './Components/PageList'
import axios from 'axios';
import {Spinner} from 'react-bootstrap'
require('dotenv').config();

const accessKey = process.env.REACT_APP_ACCESS_KEY

function App() {
  const [images,setImages] = useState(null)
  const [page, setPage] = useState(1)
  const [pageLength, setPageLength] = useState(1)
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)

  const onSearch = (keyword) => {
    if(keyword.length){
      setLoading(true)
      axios.get('https://api.unsplash.com/search/photos', {
              params: { 
                query: keyword,
                page: page,
                per_page: 20,
                client_id: accessKey
              }
          })
          .then((res) => {
            setImages(res.data.results)
            setPageLength(res.data.total_pages)
            setLoading(false)
          })
          .catch(() => {
            setLoading(false)
            console.log("Rate Limit Exceeded")
          })
    }
    setQuery(keyword)
  }

  //Only makes the api call when page changes
  useEffect( () => {
    onSearch(query)
  }, [page])  

  return (
    <div className="App">
      <NavBar onClick={onSearch}/>
      <div className="content">
        {loading && <Spinner animation="border" />}
        {images && <ImageList images={images} />}
        {!loading && images && images.length === 0 && <h1>No Results...</h1>}
      </div>
      <PageList page={page} pageLength={pageLength} prevPage={() => setPage(page - 1)} nextPage={() => setPage(page + 1)}/>
    </div>
  );
}

export default App;
