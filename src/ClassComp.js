import { Component } from "react";

class ClassComp extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <h2>This is Class Component</h2>
                <h2>name: {this.props.title}</h2>
                <h2>courseName: {this.props.courseName}</h2>
            </div>
        )
    }
}

export default ClassComp