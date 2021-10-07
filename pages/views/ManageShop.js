import React from 'react'
import ManageProductsInShop from './ManageProductsInShop';

export default class ManageShop extends React.Component{

  constructor(props){
      super(props);
      this.state = {};
  }

  render(){
    return(
      <>
            <ManageProductsInShop products={this.props.products} shopId={this.props.shopId} />


      </>
    )
  }
}

ManageShop.getInitialProps = (ctx) => {
    return {
        name:ctx.query.name,
        shopId:ctx.query.id,
        description:ctx.query.description,
        phoneNumber:ctx.query.phoneNumber,
        location:ctx.query.location,
        products:ctx.query.products,
        auctions:ctx.query.auction
    }
  }