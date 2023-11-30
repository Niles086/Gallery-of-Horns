
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'
import Container from 'react-bootstrap/Container'
import SelectedBeast from './components/SelectedBeast.jsx'
import imageUrls from './data.json';


function App() {
  const [selectedImage, setSelectedImage] = useState(null);
const [show, setShow] = useState(false);

  const handleBeastClick = (beast) => {
    console.log('Selected Beast', beast);
    setSelectedImage(beast);
    setShow(true);
  };

function hideModal() {
      setShow(false);
  }

console.log(selectedImage)
  return (
  <Container>
      <Header title="Gallery of Mythic Beasts" />
      
      <Gallery message="Whats your Favorite!!! Mythic Beast" imageUrls={imageUrls} onSelectBeast={handleBeastClick} />
         
{selectedImage && <SelectedBeast title={selectedImage.title} image_url={selectedImage.image_url} description={selectedImage.description} show={show} onHide={hideModal}/>}
     
      
      <Footer copyright="2023 Niles Thompson" />
  </Container>
  );
}






export default App;

