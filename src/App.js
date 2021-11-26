
import './App.css';
// import Home from './components/Home';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import ContactUs from './components/ContactUs';
import Section from './components/Section';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';

import ArtMusic from './components/Products/ArtMusic';
import Biography from './components/Products/Biography';
import Business from './components/Products/Business';
import Comics from './components/Products/Comics'
import ComputersTech from './components/Products/ComputersTech';
import Cooking from './components/Products/Cooking';
import Entertainment from './components/Products/Entertainment';
import HealthFitness from './components/Products/HealthFitness';
import History from './components/Products/History';
import HobbiesCrafts from './components/Products/HobbiesCrafts';
import Horror from './components/Products/Horror';
import Kids from './components/Products/Kids';
import LiteratureFiction from './components/Products/LiteratureFiction';
import Medical from './components/Products/Medical';
import Mysteries from './components/Products/Mysteries';
import Parenting from './components/Products/Parenting';
import Religion from './components/Products/Religion';
import Romance from './components/Products/Romance';
import ScienceMath from './components/Products/ScienceMath';
import ScifiFantasy from './components/Products/ScifiFantasy';
import Selfhelp from './components/Products/Selfhelp';
import SocialSciences from './components/Products/SocialSciences';
import Sports from './components/Products/Sports';
import Teen from './components/Products/Teen';
import Travel from './components/Products/Travel';
import TrueCrime from './components/Products/TrueCrime';
// import ProductCard from './components/ProductCard';


function App() {
  return (
    <div className="App">
     
     {/* <ProductCard/> */}
     <Router>

        <Header/>
        <Switch>
        <Route exact path="/"><Section/></Route>

        <Route exact path="/artmusic"><ArtMusic/></Route>
        <Route exact path="/biography"><Biography/></Route>
        <Route exact path="/business"><Business /></Route>
        <Route exact path="/comics"><Comics /></Route>
        <Route exact path="/computerstech"><ComputersTech /></Route>
        <Route exact path="/cooking"><Cooking /></Route>
        <Route exact path="/entertainment"><Entertainment /></Route>
        <Route exact path="/healthfitness"><HealthFitness /></Route>
        <Route exact path="/history"><History /></Route>
        <Route exact path="/hobbiescrafts"><HobbiesCrafts /></Route>
        <Route exact path="/horror"><Horror /></Route>
        <Route exact path="/kids"><Kids /></Route>
        <Route exact path="/literaturefiction"><LiteratureFiction /></Route>
        <Route exact path="/medical"><Medical /></Route>
        <Route exact path="/mysteries"><Mysteries /></Route>
        <Route exact path="/parenting"><Parenting /></Route>
        <Route exact path="/religion"><Religion /></Route>
        <Route exact path="/romance"><Romance /></Route>
        <Route exact path="/sciencemath"><ScienceMath /></Route>
        <Route exact path="/scififantasy"><ScifiFantasy /></Route>
        <Route exact path="/selfhelp"><Selfhelp /></Route>
        <Route exact path="/socialsciences"><SocialSciences /></Route>
        <Route exact path="/sports"><Sports /></Route>
        <Route exact path="/teen"><Teen /></Route>
        <Route exact path="/travel"><Travel /></Route>
        <Route exact path="/truecrime"><TrueCrime /></Route>

        <Route exact path="/contact"><ContactUs/></Route>
        <Route exact path="/cart"><Cart/></Route>
        </Switch>
        <Footer/>

     </Router>


    </div>
  );
}

export default App;
