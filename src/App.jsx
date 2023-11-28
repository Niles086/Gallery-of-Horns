import './app.css'
import Header from './components/Header.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Header title="Gallery of Horns" />
      <Gallery title="Horned Animals" />
      <Footer copyright="2023 Niles Thompson" />
    </div>
  );
}

export default App;