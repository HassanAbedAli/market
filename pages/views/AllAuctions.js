import React from 'react';
import Head from 'next/head'
import AuctionCard from './AuctionCard';
export default class AllProducts extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }



    render(){

        let clothes,foods,electronics,apartments,services,others;
        const auctions = this.props.allAuctions;
        console.log(auctions +" ASDASD")
        let items
        if(auctions){
            items = auctions.map(auction =>
                <AuctionCard auction={auction}/>);
        }
        else
            items=<div><h1> Currently There is No Auctions !</h1></div>

        //clothes = auctions.filter(item => item.category=='Clothes');
        //let clothesItems = clothes.map(cloth => 
        //   <AuctionCard auction={cloth}/>);

        return(

            <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <link rel="stylesheet" href="../auctionDetail.module.css"/>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            </Head>

            <div class="row">
                <div class="row mb-3" style={{backgroundColor:'orange'}}>
                        <div class="col-3 mt-5">
                            <a href="http://localhost:3000/" class=" ms-5 btn btn-primary me-3"> Main </a>
                            <a href="http://localhost:3000/products" class="btn btn-primary me-5"> Products </a>
                        </div>
                        <div class="col-6 mb-3">
                            <h4 class="text-center mb-5 mt-3">Below is all the available products</h4>
                        </div>
                        <div class="col-3 mt-5">
                            <a href="http://localhost:3000/register" class=" ms-5 btn btn-primary me-3"> Register </a>
                            <a href="http://localhost:3000/signIn" class="btn btn-primary me-5"> Login </a>
                        </div>
                </div>
                <div class="row mt-4">
                    <div class="col-2 position-relative pt-3" style={{left:30, border:'3px solid rgb(0,255,255)'}} >
                        <h3 class="text-center text-primary mb-5">Category</h3>
                        <ul class="nav nav-pills mb-3 d-flex flex-column ms-3" id="pills-tab" role="tablist">
                            <li class="nav-item text-center" role="presentation">
                                <button class="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-clothes" aria-selected="true">All</button>
                            </li>
                            <li class="nav-item text-center" role="presentation">
                                <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-clothes" type="button" role="tab" aria-controls="pills-clothes" aria-selected="true">Clothes</button>
                            </li>
                            <li class="nav-item text-center" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-electronics" type="button" role="tab" aria-controls="pills-electronics" aria-selected="false">Electronics</button>
                            </li>
                            <li class="nav-item text-center" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-food" type="button" role="tab" aria-controls="pills-food" aria-selected="false">Food</button>
                            </li>
                            <li class="nav-item text-center" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-apartments" type="button" role="tab" aria-controls="pills-apartments" aria-selected="false">Apartments</button>
                            </li>
                            <li class="nav-item text-center" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-services" type="button" role="tab" aria-controls="pills-services" aria-selected="false">Services</button>
                            </li>
                            <li class="nav-item text-center" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-other" type="button" role="tab" aria-controls="pills-other" aria-selected="false">Other</button>
                            </li>
                        </ul>



                    </div>
                    <div class="col-10">

                        <div class="row">
                            <div class="col-10 position-relative" style={{left:65}}>
                                <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                                    <div class="d-flex flex-wrap">
                                        {items}
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-clothes" role="tabpanel" aria-labelledby="pills-clothes-tab">
                                    <div class="d-flex flex-wrap">
                                        
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-electronics" role="tabpanel" aria-labelledby="pills-electronics-tab">2</div>
                                <div class="tab-pane fade" id="pills-food" role="tabpanel" aria-labelledby="pills-food-tab">3</div>
                                <div class="tab-pane fade" id="pills-apartments" role="tabpanel" aria-labelledby="pills-apartments-tab">4</div>
                                <div class="tab-pane fade" id="pills-services" role="tabpanel" aria-labelledby="pills-services-tab">5</div>
                                <div class="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">6</div>
                                </div>

                            </div>
                            <div class="col-2 position-relative p-3" style={{right:10, border:'3px solid rgb(0,255,255)'}}>
                                <h5 class="text-center text-primary mb-4">Price Range : </h5>
                                <form action="" class="mb-5">
                                    <div class="mb-4">
                                        <div class="form-floating">
                                            <input type="number" id="name" class="form-control form-control-sm" placeholder='Enter Your Name' name="minPrice" />
                                            <label for="name">minimum</label>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <div class="form-floating">
                                            <input type="number" id="name" class="form-control form-control-sm" placeholder='Enter Your Name' name="maxPrice" />
                                            <label for="name">maximum</label>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary">Submit</button>
                                </form>

                                <form>
                                    <h5 class="text-center text-primary mb-4">Sort By : </h5>
                                        <div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Increasing
                                                </label>
                                            </div>
                                            <div class="form-check mt-3">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    Decreasing
                                                </label>
                                            </div>
                                            <button class="btn btn-primary mt-3">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div class="row">

                </div>



                
            </div>




            

            </>
        )
    }



}

AllProducts.getInitialProps = (ctx) => {
    console.log(ctx.query.auctions)
    return {
        allAuctions:ctx.query.auctions
    }
    
  }
