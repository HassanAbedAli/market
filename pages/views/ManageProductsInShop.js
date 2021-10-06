import React from 'react'
import Head from 'next/head'


export default class ManageProductsInProfile extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          toDeleteProduct:0
      };
  }

  render(){

    const shops = this.props.shops;
    const rows = shops.map(shop =>
        <tr>
                <td>{shop.name}</td>
                <td>{shop.location}</td>
                <td>{shop.phoneNumber}</td>
                <td>
                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteShopModal" onClick={()=> this.setState({toDeleteShop:shop.id})} class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                </td>
                <td><a href={"http://localhost:3000/shops/"+shop.id}> Go to the Shop Page </a> </td>
            </tr>
            )

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
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2>Manage Your <b> Shops</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="#createShopModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Create New Shop</span></a>
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
                    {rows}
				</tbody>
			</table>
		</div>
	</div>        
</div>

<div id="createShopModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form action="http://localhost:3000/shops" method="POST">
				<div class="modal-header">						
					<h4 class="modal-title">Create a New Shop</h4>
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
					<div class="form-group">
						<label>Address</label>
						<input type="text" class="form-control" name="location" required/>
					</div>
					<div class="form-group">
						<label>Phone</label>
						<input type="text" class="form-control" name="phoneNumber" required/>
					</div>
                    <input type="hidden" name="userId" value={this.props.userId}/>					
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" class="btn btn-success" value="Create"/>
				</div>
			</form>
		</div>
	</div>
</div>

<div id="editEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form>
				<div class="modal-header">						
					<h4 class="modal-title">Edit Employee</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Name</label>
						<input type="text" class="form-control" required/>
					</div>

                    <div class="form-group">
						<label>Description</label>
						<textarea class="form-control" required></textarea>
					</div>

					<div class="form-group">
						<label>Address</label>
						<input type="email" class="form-control" required/>
					</div>
					<div class="form-group">
						<label>Phone</label>
						<input type="text" class="form-control" required/>
					</div>					
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" class="btn btn-info" value="Save"/>
				</div>
			</form>
		</div>
	</div>
</div>

<div id="deleteShopModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form action={"http://localhost:3000/shops/delete/"+this.state.toDeleteShop} method="POST">
				<div class="modal-header">						
					<h4 class="modal-title">Delete Shop</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Are you sure you want to delete this Shop?</p>
					<p class="text-warning"><small>This action cannot be undone.</small></p>
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" class="btn btn-danger" value="Delete"/>
				</div>
			</form>
		</div>
	</div>
</div>









      </>
    )
  }
}