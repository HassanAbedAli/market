import React from 'react'
import Head from 'next/head'

export default class ProductDetail extends React.Component{

  constructor(props){
      super(props);
      this.state = {};
  }

  render(){
    return(
      <>

<Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        </Head>


        <div class="d-flex mt-5 ms-5">
          <div class="w-30">
            <img src={this.props.product.image} style={{border:'5px solid orange', height:300}}/>
          </div>
          <div class="ms-5 w-70">
            <h6 class="text-dark">Name : <span class="text-primary"> {this.props.product.name} </span> </h6><hr/>
            <h6 class="text-dark">Description : <span class="text-primary">{this.props.product.description}</span></h6><hr/>
            <h6 class="text-dark">Category : <span class="text-primary"> {this.props.product.category}</span></h6><hr/>
            <h6 class="text-dark"> Price : <span class="text-primary"> {this.props.product.price} $</span></h6><hr/>
            <h6 class="text-dark">Discount : <span class="text-primary">{this.props.product.percentage} %</span> </h6><hr/>
            <h6 class="text-dark"> Shop : <span class="text-primary"> {this.props.product.shop.name} </span></h6><hr/>
            <h6 class="text-dark"> Shop Location : <span class="text-primary"> {this.props.product.shop.location}</span></h6><hr/>
            <h6 class="text-dark"> Phone Number of Shop : <span class="text-primary"> {this.props.product.shop.phoneNumber} </span></h6>
          </div>
        </div>
        
      </>
      
    )
  }
  

}

// assigning the initial props to the component's props
ProductDetail.getInitialProps = (ctx) => {
  return {
    product: ctx.query
  }
}
