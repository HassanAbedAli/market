import React from 'react';
import '../main.module.css'
import Head from 'next/head'
import ProductCard from './ProductCard'
import AuctionCard from './AuctionCard'
import Nav from './Nav'

export default class main extends React.Component{

    constructor(props){
        super(props);
        this.state = {};   
    }


    render(){
        let topProducts;
        topProducts = this.props.products.map(product =>
            <ProductCard product={product}/>);
        
        let topAuctions;
        topAuctions = this.props.auctions.map(auction =>
            <AuctionCard auction={auction}/>);



        return(
            <>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        </Head>

            <div class="row" style={{borderBottom:'5px solid blue', borderTop:'5px solid blue'}}>
                <div class="col-4 mt-3">
                <div class="d-flex justify-content-evenly">
                        <a class="btn btn-primary" style={{backgroundColor: '#3b5998'}} href="#!" role="button"
                        ><i class="fa fa-facebook-f"></i
                        ></a>

                        <a class="btn btn-primary" style={{backgroundColor: '#55acee'}} href="#!" role="button"
                        ><i class="fa fa-twitter"></i
                        ></a>

                        <a class="btn btn-primary" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"
                        ><i class="fa fa-google"></i
                        ></a>

                        <a class="btn btn-primary" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"
                        ><i class="fa fa-instagram"></i
                        ></a>
                    </div>
                </div>
                <div class="col-4 mt-2">
                    <h1 class="text-center text-info"> Marketera</h1>
                </div>
                <div class="col-4 mt-2">
                    <Nav/>

                </div>

            </div>
            <div class="row mt-5">
                <div class="d-flex flex-column justify-content-center align-items-center col-12">
                    <h1 class="text-primary text-center mb-5"> Bid on the Most Competitive Auctions!</h1>
                    <img src="https://www.adexchanger.com/wp-content/uploads/2020/10/in-app-bidding.png" class="w-70" style={{width:750}}/>
                </div>
            </div>
            <div class="row mt-5">
                <div class="d-flex flex-column justify-content-center align-items-center col-12">
                    <h1 class="text-primary text-center mb-5"> Buy The Best Products Available on the Market!</h1>
                    <img src="https://www.internetx.com/fileadmin/_processed_/0/c/csm_E-Commerce_dcc2719819.png" class="w-70" style={{width:750}}/>
                </div>
            </div>

            <div class="row mt-5">
                <h1 class="text-primary text-center mb-5"> Our Top Products</h1>
                <div class="d-flex flex-wrap justify-content-center">
                    {topProducts}
                </div>
            </div>
            <div class="row mt-5">
                <h1 class="text-primary text-center mb-5"> Our Top Auctions</h1>
                <div class="d-flex flex-wrap justify-content-center">
                    {topAuctions}
                </div>
            </div>
            <div class="row">
            </div>
            </>
        )
    }
}

main.getInitialProps = (ctx) => {
    return {
        products:ctx.query.products,
        auctions:ctx.query.auctions
    }
  }