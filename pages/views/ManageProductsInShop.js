import React from 'react'
import Head from 'next/head'


export default class ManageProductsInShop extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          toDeleteProduct:0
      };
  }

  render(){
	
    const products = this.props.products;
	console.log(products)
    const rows = products.map(product =>
        <tr>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
				<td>{product.percentage==null? "No Discount":
				
				<div>{product.percentage}
				<p>{new Date(product.dateStart.toString()).toDateString()}</p>
				<p>{new Date(product.dateEnd.toString()).toDateString()}</p>
				</div>
				}
				</td>


                <td>
                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteProductModal" onClick={()=> this.setState({toDeleteProduct:product.id})} class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                </td>
                <td><a href={"http://localhost:3000/products/"+product.id}> Go to the Product Detail Page </a> </td>
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


			<br/><br/><br/><br></br>
        <div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2>Manage Your <b> Products</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="#addProductModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add a New Product</span></a>
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Category</th>
						<th>Price</th>
						<th> Discount Percentage </th>
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

<div id="addProductModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form action="http://localhost:3000/products" method="POST">
				<div class="modal-header">						
					<h4 class="modal-title">Add a New Product</h4>
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
							<option selected="">Select category</option>
							<option value="Clothes">Clothes</option>
							<option value="Food">Food</option>
							<option value="Electronics">Electronics</option>
							<option value="Homes">Homes</option>
							<option value="Services">Services</option>
							<option value="Other">Other</option>
							</select>
					</div>
					<div class="form-group">
						<label>Price</label>
						<input type="number" class="form-control" name="price" required/>
					</div>
					<div class="form-group">
						<label>Image URL : </label>
						<input type="text" class="form-control" name="image" required/>
					</div>
					<div class="form-group">
						<label>Discount ( Optional )</label>
						<input type="number" class="form-control" name="percentage" required/>
					<br/>

					<div class="row">
						<div class="col-6 ">
							<label for="discountDateStart"  >Discount Date Start</label>
                    		<input id="discountDateStart" name="discountDateStart" type="date" class="form-control validate"/>
						</div>
						<div class="col-6">
						<label for="discountDateEnd" >Discount Date End</label>
                    	<input id="discountDateEnd" name="discountDateEnd" type="date" class="form-control validate"/>
						</div>
					</div>
					</div>
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" class="btn btn-success" value="Add Product"/>
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
						<label>Category</label>
						<textarea class="form-control" required></textarea>
					</div>

					<div class="form-group">
						<label>Price</label>
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

<div id="deleteProductModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form action={"http://localhost:3000/products/delete/"+this.state.toDeleteProduct} method="POST">
				<div class="modal-header">						
					<h4 class="modal-title">Delete Product</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Are you sure you want to delete this Product?</p>
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