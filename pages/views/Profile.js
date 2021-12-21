import React from 'react';
import Head from 'next/head'
import ManageShopsInProfile from './ManageShopsInProfile';

export default class Profile extends React.Component{

    constructor(props){

        var str = "noob"
        super(props);
        this.state = {};   
    }

    render(){
        return(
            <>
            <Head> 
                <link rel="stylesheet" href="../profile.module.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            </Head>
                <div class="container">
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110"/>
                                    <div class="mt-3">
                                        <h4>{this.props.firstname + "  "}{this.props.lastname}</h4>
                                        <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                        <button class="btn btn-outline-primary">Upload Photo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-body">



                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                    <input type="text" class="form-control" value={this.props.firstname+" "+this.props.lastname} readonly />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Username</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                    <input type="text" class="form-control" value={this.props.username} readonly />
                                    </div>
                                </div>


                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                    <input type="text" class="form-control" value={this.props.email} readonly />

                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Phone</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                    <input type="text" class="form-control" value={this.props.phoneNumber} readonly />

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3"></div>
                                    <div class="col-sm-9 text-secondary">
                                        <form action="http://localhost:3000/logout" method="POST">
                                            <input type="submit" value="logout" class="btn btn-outline-primary"/>
                                        </form>                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <hr/>
                <div class="row">
                    <ManageShopsInProfile userId={this.props.userId} shops={this.props.shops}/>
                </div>
            </div>
        </div>

            </>
        )
    }
}

Profile.getInitialProps = (ctx) => {
    return {
      username : ctx.query.username,
      firstname :ctx.query.firstName,
      lastname : ctx.query.lastName,
      email : ctx.query.email,
      phoneNumber : ctx.query.phoneNumber,
      userId:ctx.query.id,
      shops:ctx.query.shops
    }
  }