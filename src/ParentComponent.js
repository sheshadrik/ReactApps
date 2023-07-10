import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {    //Class component
    render() {    
        return (        
            <ChildComponent username="Print Child" />    
        );  
    }
}
export default ParentComponent;
