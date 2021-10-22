
import './App.css';
// import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import ContactUs from './components/ContactUs';
import Section from './components/Section';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';

import ArtMusic from './components/Products/ArtMusic';


function App() {
  return (
    <div className="App">
     
     <Router>

        <Header/>
        <Switch>
        <Route exact path="/"><Section/></Route>
        <Route exact path="/artmusic"><ArtMusic/></Route>
        <Route exact path="/biography"><ArtMusic/></Route>
        <Route exact path="/contact"><ContactUs/></Route>
        <Route exact path="/cart"><Cart/></Route>
        </Switch>
        <Footer/>

     </Router>


    </div>
  );
}

export default App;
