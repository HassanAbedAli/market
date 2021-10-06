

import React from 'react'

export default class ProductDetail extends React.Component{

  constructor(props){
      super(props);
      this.state = {};
  }

  render(){
    return(
      <>
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.location}</td>
                <td>{this.props.phoneNumber}</td>
                <td>
                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                </td>
            </tr>
      </>
    )
}
}
