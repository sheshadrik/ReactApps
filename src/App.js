import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Toggle from './eventhandler/Toggle';
import GetDerivedStateFromPropsMethod from './lifecycle/getDerivedStateFromPropsMethod';
import ShouldComponentUpdateMethod from './lifecycle/ShouldComponentUpdateMethod';
import MyForm from './formcontrols/myform';
import SignUp from './formcontrols/signup';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import { Contact, Home} from './pages';
import NoPage from './pages/nopage';
import Layout from './pages/layout';
import { Container } from 'react-bootstrap';
import Counter from './counter';
import CounterContainer from './counterContainer';

function App() {
  return (

    <BrowserRouter>
    
    <div className="App">
       
       <Header></Header>

       <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>  
      {/* <Toggle></Toggle>
      <GetDerivedStateFromPropsMethod></GetDerivedStateFromPropsMethod> */}
      {/* <ComponentDidMountMethod></ComponentDidMountMethod> */}
      {/* <ComponentDidUpdateMethod></ComponentDidUpdateMethod> */}
      {/* <ShouldComponentUpdateMethod></ShouldComponentUpdateMethod>
      <MyForm></MyForm> */}
      <CounterContainer/>      
      </Container>
            
      <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
