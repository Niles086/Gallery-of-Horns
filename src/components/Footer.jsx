
import { Navbar } from "react-bootstrap";

function Footer(props) {
  return (
    <Navbar backgroundC bg="dark" variant="dark">
      <Navbar.Brand>
      <p>Tracking things since &copy;{props.copyright}</p>
      </Navbar.Brand>
    </Navbar>
  );
}


export default Footer;