import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner/Banner';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>

      <Banner/>
      <Body/>

      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
