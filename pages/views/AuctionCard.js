import React from "react";
import ManageAuctionsInShop from "./ManageAuctionsInShop";


export default class AuctionCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {};   
    }


        render(){

            return(
                <>
                <div class="card col-3 me-5 mb-5 text-center">
                    <img src={this.props.auction.image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.auction.name}</h5>
                        <p class="card-text text-muted">Highest Bid : {ManageAuctionsInShop.getHighestBid(this.props.auction)}</p>
                        <a href={'http://localhost:3000/auctions/'+this.props.auction.id} class="btn btn-primary">View More Details</a>
                    </div>
                </div>
                </>
            )



        }



    }