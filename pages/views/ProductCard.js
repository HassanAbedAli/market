import React from "react";


export default class ProductCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {};   
    }


        render(){

            return(
                <>
                <div class="card col-3 me-5 mb-5 text-center">
                    <img src={this.props.product.image} class="card-img-top" alt="..." style={{maxHeight: 175}}/><hr/>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.product.name}</h5>
                        <p class="card-text text-muted">Price : {this.props.product.price} $</p>
                        <a href={'http://localhost:3000/products/'+this.props.product.id} class="btn btn-primary">View More Details</a>
                    </div>
                </div>
                </>
            )



        }



    }