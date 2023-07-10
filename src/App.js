import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Toggle from './eventhandler/Toggle';
import GetDerivedStateFromPropsMethod from './lifecycle/getDerivedStateFromPropsMethod';
import ShouldComponentUpdateMethod from './lifecycle/ShouldComponentUpdateMethod';
import MyForm from './formcontrols/myform';

function App() {
  return (
    <div className="App">     
      <Header></Header>
      <div className="main-content">
      <p>Body Content</p>
      <Toggle></Toggle>
      <GetDerivedStateFromPropsMethod></GetDerivedStateFromPropsMethod>
      {/* <ComponentDidMountMethod></ComponentDidMountMethod> */}
      {/* <ComponentDidUpdateMethod></ComponentDidUpdateMethod> */}
      <ShouldComponentUpdateMethod></ShouldComponentUpdateMethod>
      <MyForm></MyForm>
      </div>
            
      <Footer></Footer>
    </div>
  );
}

export default App;
