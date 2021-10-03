import React from 'react';
import Test from './Test';

export default class App extends React.Component{

    constructor(props){

        var str = "noob"
        super(props);
        this.state = { counter: 0};

        this.increment=this.increment.bind(this);
    }


    render(){
        return(
            <>
                <div>
                    <Test str="noob"/>
                    <h1> {this.state.counter} </h1>
                    <button onClick={this.increment}> Increment</button>
                </div>
            </>
        );
    }

    increment(){
        this.setState({counter:this.state.counter+1});
    }
    
}


