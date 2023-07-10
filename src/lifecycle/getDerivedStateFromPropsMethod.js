import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: 'Constructor Method'
        }
      }

    static getDerivedStateFromProps(props, state) {
        return {name: props.nameFromParent} 
      }
    render() {
        return (
            <div>
                This is a {this.state.name}
            </div>
        )
    }
}


class GetDerivedStateFromPropsMethod extends Component {
   
    render() {
        return (
            <div>
                <ChildComponent nameFromParent="getDerivedStateFromProps Method"/>
            </div>
        )
    }
}

export default GetDerivedStateFromPropsMethod;