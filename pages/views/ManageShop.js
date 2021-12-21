import React from 'react'
import ManageProductsInShop from './ManageProductsInShop';
import ManageAuctionsInShop from './ManageAuctionsInShop';
export default class ManageShop extends React.Component{

  constructor(props){
      super(props);
      this.state = {};
  }

  render(){
    return(
      <>
            <ManageAuctionsInShop auctions={this.props.auctions} shopId={this.props.shopId} />
            <br/>
            <ManageProductsInShop products={this.props.products} shopId={this.props.shopId} />
      </>
    )
  }
}

ManageShop.getInitialProps = (ctx) => {
  console.log(ctx.query.auctions)
    return {
        name:ctx.query.name,
        shopId:ctx.query.id,
        description:ctx.query.description,
        phoneNumber:ctx.query.phoneNumber,
        location:ctx.query.location,
        products:ctx.query.products,
        auctions:ctx.query.auctions
    }
  }