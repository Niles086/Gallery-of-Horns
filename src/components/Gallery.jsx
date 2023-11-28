/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HornedBeastImg from "./HornedBeast";

function Gallery(props) {
  return (
    <div>
      <h2>{props.message}</h2>
      <Container>
        <Row>
          <Col>
            <HornedBeastImg imgUrl= />
          </Col>
          <Col>
            <HornedBeastImg imgUrl= />
          </Col>
          <Col>
            <HornedBeastImg imgUrl= />
          </Col>
        </Row>
        <Row>
          <Col>
            <HornedBeastImg imgUrl= />
          </Col>
          <Col>
            <HornedBeastImg imgUrl= />
          </Col>
          <Col>
            <HornedBeastImg imgUrl= />
          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default Gallery;