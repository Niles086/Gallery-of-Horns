/* eslint-disable react/prop-types */

import { Navbar } from "react-bootstrap";

function Footer(props) {
  return (
    <Navbar  bg="dark" variant="dark">
      <Navbar.Brand>
      <p>Providing Beast Since &copy;{props.copyright}</p>
      </Navbar.Brand>
    </Navbar>
  );
}


export default Footer;