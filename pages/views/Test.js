import React from 'react'; 

export default class Test extends React.Component{

    constructor(props){
        super(props);
        this.state = { str:this.props.str}
        this.handleChange=this.handleChange.bind(this)
    }

    render(){
        return(
            <>
            <input type="text" name="hassan" value={this.state.str} onChange={this.handleChange}/>
             <h1> Hello world for {this.state.str} </h1>
            </>
        );
    }

    handleChange(event){
        this.setState({str : event.target.value})
    }

}


