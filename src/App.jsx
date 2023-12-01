import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'
import Container from 'react-bootstrap/Container'
import SelectedBeast from './components/SelectedBeast.jsx'
import imageUrls from './data.json';
import { Form } from 'react-bootstrap';
import NumberFilter from "./components/NumberFilter.jsx";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState('all'); // Add this state for selected option

  const handleBeastClick = (beast) => {
    console.log('Selected Beast', beast);
    setSelectedImage(beast);
    setShow(true);
  };

  function hideModal() {
    setShow(false);
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // Perform filtering logic based on the selected option
    // Update the displayed images accordingly
  }

  console.log(selectedImage)

  return (
    <Container>
      <Header title="Gallery of Mythic Beasts" />

      {/* <Form>
        <Form.Group controlId="hornsFilter">
          <Form.Label>Filter by number of horns:</Form.Label>
          <Form.Control as="select" value={selectedOption} onChange={handleOptionChange}>
            <option value="all">All</option>
            <option value="1">1 horn</option>
            <option value="2">2 horns</option>
            <option value="3">3 horns</option>
            <option value="4">4 horns</option>
           
          </Form.Control>
        </Form.Group>
      </Form> */}

      <Gallery message="Whats your Favorite!!! Mythic Beast" imageUrls={imageUrls} onSelectBeast={handleBeastClick} />

      {selectedImage && <SelectedBeast title={selectedImage.title} image_url={selectedImage.image_url} description={selectedImage.description} show={show} onHide={hideModal} />}

      <Footer copyright="2023 Niles Thompson" />
    </Container>
  );
}

export default App;