import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import axios from 'axios';

import GalleryItem from '../GalleryItem/GalleryItem'
import GalleryList from '../GalleryList/GalleryList'


function App() {

  // start with empty array
  let [galleryItems, setGalleryItemsArray] = useState([]);

  // On Load runs this
  useEffect(() => {
    console.log('in useEffect')
    getPicsList ();
  }, []);

// GET 
  const getPicsList = () => {
    console.log('In getPicsList function');
    axios.get('/gallery')
      .then((response) => {
        console.log('Response is:', response.data);
        // array of pics objects stored in state array
        setGalleryItemsArray(response.data); 
        })
        .catch((error) => {
          alert(`Couldn't add picture item'`);
          console.log('Error adding picture data', error);
        });
  };


    const clearPics = () => {
      axios({
        method: 'DELETE',
        url: '/gallery'
      }).then(response => {
        console.log('Cleared pics list');
      }).catch(error => {
        console.log('DELETE LIST error', error);
      });
    };

    const markLiked = (id) => {
      console.log('id is:' , id);

      axios({
        method: 'PUT',
        url: `/gallery/${id}`
      }).then(response => {
        console.log('marked the pic liked');
      }).catch(error => {
        console.log('PUT error', error);
      })
    }

    const swap = (id) => {
      console.log('id is: ', id);

      axios({
        method: 'PUT', 
        url: `/gallery/${id}`
      }).then(response => {
        console.log('pic swapped');
      }).catch(error => {
        console.log('PUT error', error);
      })
    }



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>

        <GalleryList
          galleryItems={galleryItems}
          getPicsList={getPicsList}
        />
        <img src="images/centralPark.JPG"/>
      </div>
    );
}

export default App;
