
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'
import Container from 'react-bootstrap/Container'
import imageUrls from './data.json';
function App() {
  return (
  <Container>
      <Header title="Gallery of Mythic Beasts" />
      
      <Gallery message="Whats your Favorite!!! Mythic Beast" imageUrls={imageUrls} />
      
      <Footer copyright="2023 Niles Thompson" />
  </Container>
  );
}





export default App;

