
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'
import { Container } from 'react-bootstrap';

function App() {
  return (
  <Container>
      <Header title="Gallery of Horns" />
      
      <Gallery message="Whats your Favorite!!! Horned Animal" />
      
      <Footer copyright="2023 Niles Thompson" />
  </Container>
  );
}





export default App;

