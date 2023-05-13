
import './App.css';
import Projects from './components/Projects';
import ContactDetails from './components/ContactDetails';
import Home from './components/Home';
import Error from './components/Error';
import Navbar1 from './components/Navbar1';
import Services from './components/Services';
import About from './components/About';
import TextEditor from './components/TextEditor';
import LoginForm from './components/LoginForm'
import Footer from './components/Footer';
import FoundedIn from './components/FoundedIn';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div>
    <Navbar1/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/projects' element={<Projects/>}></Route>
        <Route exact path='/contactDetails' element={<ContactDetails/>}></Route>
        <Route exact path='/services' element={<Services/>}></Route>
        <Route exact path='/about' element={<About></About>}></Route>
        <Route exact path='/textEditor' element={<TextEditor/>}></Route>
        <Route exact path='/loginForm' element={<LoginForm></LoginForm>}></Route>
        <Route exact path='/footer' element={<Footer></Footer>}></Route>
        <Route exact path='/foundedIn' element={<FoundedIn/>}></Route>
        <Route exact path='/*' element={<Error/>}></Route>
      </Routes>
      </div>
    </Router>
  
    
    </>
  );
}

export default App;
