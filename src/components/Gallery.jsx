/* eslint-disable react/prop-types */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HornedBeast from "./HornedBeast";
import React, { useState } from "react";

function Gallery(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageClick = (image) => {
    props.onSelectBeast(image);
    setSelectedImage(image);
    setModalVisible(true);
  };
  
  return (
    <div>
      <h2>{props.message}</h2>
      <Container>
      <Row>
          {props.imageUrls.slice(0, 4).map((item, index) => (
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
          {props.imageUrls.slice(4, 8).map((item, index) => (
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
          {props.imageUrls.slice(8, 12).map((item, index) => (
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
          {props.imageUrls.slice(12, 16).map((item, index) => (
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
          {props.imageUrls.slice(16, 20).map((item, index) => (
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