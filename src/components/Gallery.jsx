/* eslint-disable react/prop-types */
import NumberFilter from "./NumberFilter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HornedBeast from "./HornedBeast";
import React, { useState } from "react";

function Gallery(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredImages, setFilteredImages] = useState(props.imageUrls);

  const handleImageClick = (image) => {
    props.onSelectBeast(image);
    setSelectedImage(image);
    setModalVisible(true);
  };

  const handleFilterChange = (selectedOption) => {
    console.log(selectedOption);
    // Update the filtered images based on the selected option
    const newFilteredImages =
      selectedOption === "all"
        ? props.imageUrls
        : props.imageUrls.filter(
            (image) => image.horns === parseInt(selectedOption)
          );

    setFilteredImages(newFilteredImages);
  };
  
  return (
    <div>
      <NumberFilter onSelectedOptionChange={handleFilterChange} />
      <h2>{props.message}</h2>
      <Container>
      <Row>
          {filteredImages.slice(0, 4).map((item, index) => (
            <Col key={index}>
              <HornedBeast
                title={item.title}
                image_url={item.image_url}
                description={item.description}
                onClick={() => handleImageClick(item)}
              />
            </Col>
          ))}
        </Row>
        <Row>
          {filteredImages.slice(4, 8).map((item, index) => (
            <Col key={index}>
              <HornedBeast
                title={item.title}
                image_url={item.image_url}
                description={item.description}
                onClick={() => handleImageClick(item)}
              />
            </Col>
          ))}
        </Row>
        <Row>
          {filteredImages.slice(8, 12).map((item, index) => (
            <Col key={index}>
              <HornedBeast
                title={item.title}
                image_url={item.image_url}
                description={item.description}
                onClick={() => handleImageClick(item)}
              />
            </Col>
          ))}
        </Row>
        <Row>
          {filteredImages.slice(12, 16).map((item, index) => (
            <Col key={index}>
              <HornedBeast
                title={item.title}
                image_url={item.image_url}
                description={item.description}
                onClick={() => handleImageClick(item)}
              />
            </Col>
          ))}
        </Row>
        <Row>
          {filteredImages.slice(16, 20).map((item, index) => (
            <Col key={index}>
              <HornedBeast
                title={item.title}
                image_url={item.image_url}
                description={item.description}
                onClick={() => handleImageClick(item)}
              />
            </Col>
          ))}
        </Row>
        
    
      </Container>

    </div>
  );
}

export default Gallery;