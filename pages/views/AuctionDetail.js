import React from 'react';
import '../auctionDetail.module.css'
import Head from 'next/head'
import ManageAuctionsInShop from './ManageAuctionsInShop';

export default class AuctionDetail extends React.Component{

    constructor(props){
        super(props);
        this.state = {};   
    }


        render(){

            let bids = this.props.bids;
            let rows;
            let addBid;
            if(bids){
                rows = bids.map(bid => 
                
                    <tr class="text-primary">
                        <td>{bid.name}</td>
                        <td>{bid.amount} $</td>
                        <td>{bid.comment}</td>
                    </tr >
                    
                    )
            }
            if(this.props.user){
                addBid =
                <form action="http://localhost:3000/bids" method="POST" class="d-flex flex-column">
                    <h3 class="text-center text-primary"> Place a Bid</h3>
                    <br/>
                    <div class="mb-4">
                        <div class="form-floating">
                            <input type="number" id="name" class="form-control" placeholder='Enter Your Name' name="amount" />
                            <label for="name">Amount</label>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="form-floating">
                            <input type="text" id="name" class="form-control" placeholder='Enter Your Name' name="comment" />
                            <label for="name">Comment</label>
                        </div>
                    </div>
                    <input type="hidden"value={this.props.user.id} name="bidderId"/>
                    <input type="hidden" value={this.props.auctionId} name="auctionId"/>
                    <input type="hidden" value={this.props.user.email} name="name"/>
                    <input type="submit" class="btn btn-primary"/>
                </form>
            }
            else{
                addBid=
                <div>
                    <h3 class="text-center text-primary"> Place a Bid</h3>
                    <h4 class="text-center text-danger mt-5">To add a Bid, Please Login First</h4>
                    <div class="d-flex justify-content-evenly mt-5">
                        <a class="btn btn-primary" href="http://localhost:3000/signIn">Login</a>
                        <a class="btn btn-primary" href="http://localhost:3000/register">Register</a>
                    </div>
                </div>
            }



            
            
            return(
                <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <link rel="stylesheet" href="../auctionDetail.module.css"/>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        </Head>


        <div class="d-flex">
            <div class="card ms-5 mt-5 me-5 col-4">
                <div class="row g-0">
                    <div class="col-4">
                        <img src={this.props.image} class="img-fluid rounded-start" style={{height:225}}alt="..."/>
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">{this.props.name}</h5>
                            <p>{this.props.description}</p>
                            <p ><small class="text-muted">{this.props.category}</small></p>
                            <p>Highest Bid : {ManageAuctionsInShop.getHighestBid(this.props)}</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <br/>
                {addBid}
            </div>
            <div class="ms-5 mt-3 col-6">
                <div class="d-flex justify-content-center">
                    <div>
                        <table class="table bg-active table-bordered table-hover text-center">
                            <caption class="caption-top">Bids on This Auction</caption>
                            <thead>
                                <tr>
                                    <th> User Email </th>
                                    <th> Amount</th>
                                    <th> Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>      
                </>
            )
        }



}

AuctionDetail.getInitialProps = (ctx) => {
    console.log(ctx.query.user)
    console.log(ctx.query)
    return {
        auctionId:ctx.query.auction.id,
        name:ctx.query.auction.name,
        shopId:ctx.query.id,
        description:ctx.query.auction.description,
        category:ctx.query.auction.category,
        bids:ctx.query.auction.bids,
        user:ctx.query.user,
        image:ctx.query.auction.image
    }
    
  }