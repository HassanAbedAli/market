import React from 'react'

export default class DeleteModal extends React.Component{

  constructor(props){
      super(props);
      this.state = {};
  }

  render(){
    return(
      <>
        <div id="deleteShopModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action={"http://localhost:3000/shops/"+shopId} method="DELETE">
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