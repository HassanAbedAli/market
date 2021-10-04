import React from 'react'

export default class Product extends React.Component{

  constructor(props){
      super(props);
      this.state = {};
  }

  render(){
    return(
      <>
        <h1> {this.props.title} </h1>
      </>
    )
  }
  

}

// assigning the initial props to the component's props
Product.getInitialProps = (ctx) => {
  return {
    title: ctx.query.title,
  }
}
