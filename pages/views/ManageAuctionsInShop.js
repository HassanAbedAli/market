import React from 'react'
import Head from 'next/head'


export default class ManageAuctionsInShop extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          toDeleteAuction:0,
		  toEditAuction:{}
      };

	this.getHighestBid=ManageAuctionsInShop.getHighestBid.bind(this);

  }
	static getHighestBid(auction){
		if(auction.bids.length!=0){
			let max = 0;
			var currentNumber;
			for(let i=0; i<auction.bids.length; i++){
				currentNumber=auction.bids[i].amount
				if(currentNumber>max)
					max=currentNumber;
			}
			return max;
		}
		return "No Bids";
	}

	

//   	handleNameChange(event){
// 	this.setState({toEditProduct:{name:event.target.value}});
//   }
// 	handleDescriptionChange(event){
// 	this.setState({toEditProduct:{description:event.target.value}});
//   }
// 	handlePriceChange(event){
// 	this.setState({toEditProduct:{price:event.target.value}});
//   }

  render(){
	
    const auctions = this.props.auctions;
    let rows;
	
    if(auctions){
		
        rows = auctions.map(auction =>

			
            <tr>
                    <td>{auction.name}</td>
                    <td>{auction.category}</td>
                    <td>{auction.bids.length}</td>
                    <td> {this.getHighestBid(auction)} </td>
                    <td>
                        <a href="#editAuctionModal" onClick={()=> this.setState({toEditAuction:auction})} class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                    </td>
                    <td>
                        <a href="#deleteAuctionModal" onClick={()=> this.setState({toDeleteAuction:auction.id})} class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                    <td>
                        <a href={"http://localhost:3000/auctions/"+auction.id}> <span class="material-icons">visibility</span></a> 
                    </td>
                </tr>
                )
    }
    

    return(
      <>

        <Head>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="../manageShopsInProfile.module.css"/> 

        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

        </Head>
        <div class="container-xl">
	<div class="table-responsive mt-5 text-center">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2 class="text-primary text-left mb-3">Manage Your <b> Auctions</b></h2>
					</div>
					<div class="col-sm-6 text-right">
						<a href="#addAuctionModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span style={{position:'relative', bottom:5}}>Add a New Auction</span></a>
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Category</th>
						<th>Bids Number</th>
						<th> Highest Bid </th>
						<th> Edit</th>
						<th> Delete</th>
						<th> Preview</th>
					</tr>
				</thead>
				<tbody>
                    {rows}
				</tbody>
			</table>
		</div>
	</div>        
</div>

<div id="addAuctionModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form action="http://localhost:3000/auctions" method="POST">
				<div class="modal-header">						
					<h4 class="modal-title">Add a New Auction</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Name</label>
						<input type="text" class="form-control" name="name" required/>
					</div>

					<div class="form-group">
						<label>Description</label>
						<textarea class="form-control" name="description" required></textarea>
					</div>

					<input type="hidden" name="shopId" value={this.props.shopId}/>

                    <div class="form-group">
						<label for="category">Category</label>
							<select class="custom-select tm-select-accounts" name="category" id="category">
							<option value="Clothes">Clothes</option>
							<option value="Food">Food</option>
							<option value="Electronics">Electronics</option>
							<option value="Homes">Homes</option>
							<option value="Services">Services</option>
							<option value="Other">Other</option>
							</select>
					</div>

					<div class="form-group">
						<label>Image : </label>
						<input type="text" class="form-control" name="image" required/>
					</div>

				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" class="btn btn-success" value="Add Auction"/>
				</div>
			</form>
		</div>
	</div>
</div>



<div id="editAuctionModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form action={`http://localhost:3000/products/edit/10`} method="POST">
				<div class="modal-header">						
					<h4 class="modal-title">Edit Auction</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Name</label>
						<input type="text" name="name" class="form-control" value="House"  required/>
					</div>
					<div class="form-group">
						<label>Phone</label>
						<textarea class="form-control" name="description"  >A new House that overlooks the sea, 5 Rooms</textarea>
					</div>

                    <div class="form-group">
						<label>Category</label>
						<select class="custom-select tm-select-accounts" name="category" id="category">
						<option value="Clothes"> Clothes</option>
						<option value="Food">Food</option>
						<option value="Electronics">Electronics</option>
						<option value="Homes">Homes</option>
						<option value="Services">Services</option>
						<option value="Other">Other</option>
						</select>
					</div>			
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" class="btn btn-info" value="Save"/>
				</div>
				<input type="hidden" name="shopId" value={this.props.shopId} readOnly />
			</form>
		</div>
	</div>
</div>






<div id="deleteAuctionModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form action={"http://localhost:3000/auctions/delete/"+this.state.toDeleteAuction} method="POST">
				<div class="modal-header">						
					<h4 class="modal-title">Delete Auction</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Are you sure you want to delete this Auction?</p>
					<p class="text-warning">This action cannot be undone.</p>
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" class="btn btn-danger" value="Delete"/>
					<input type="hidden" name="shopId" value={this.props.shopId} readOnly />
				</div>
			</form>
		</div>
	</div>
</div>



      </>
    )
	}
}