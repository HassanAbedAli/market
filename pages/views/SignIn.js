import Head from 'next/head'
import React from "react";

export default class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }


    render(){

        return(
            <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            </Head>
                <div class="container-fluid">
            <div class="row no-gutter mt-5">
                <div class="col-md-6 d-none d-md-flex bg-image">
                    <img src="https://static.vecteezy.com/system/resources/previews/001/871/329/non_2x/landing-page-of-shopping-and-spending-money-with-e-commerce-apps-have-your-own-shop-with-e-commerce-find-right-item-with-online-shop-graphic-design-template-for-web-websites-site-banner-flyer-free-vector.jpg" style={{width:725}}/>
                    </div>
                <div class="col-md-6">
                    <div class="login d-flex align-items-center">
        
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h5 class="display-4">Login</h5>
                                    <p class="text-muted mb-4">Please Enter Your Credentials below</p>
                                    <form action="http://localhost:3000/login" method="POST" >
                                        <div class="form-group mb-3">
                                            <input id="inputEmail" name="email" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"/>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputPassword" name="password" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox" checked class="custom-control-input"/>
                                            <label for="customCheck1" class="custom-control-label">Remember password</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Login</button>
                                        <div class="text-center d-flex justify-content-between mt-4"><p>Dont have an Account ?  <a href="http://localhost:3000/register" class="font-italic text-muted"> 
                                                <u>Register Now</u></a></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>
        
            </div>
        </div>
        </>
        )
        
    }
}