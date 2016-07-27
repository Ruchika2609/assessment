var React = require('react');
var MyHome= React.createClass({
  submitData:function(){
       $.ajax({
   url:"http://localhost:8080/mailbox/add",
   type:"POST",
   datatype:"JSON",
     data:this.props.allMails,
   success: function(data)
   {
     console.log(data);
   }.bind(this),
   error: function(err)
   {
     console.log(err);
   }.bind(this)
  });
 },
    render: function() {
    return (
      <div className="mail">
      <div className="col-md-12 container">
       <div className ="col-sm-4">
        <input type="submit" className="btn btn-block btn-warning" value="Add this data to my list" onClick={this.submitData}/>
      </div>

       <div className ="col-sm-4">
         {this.props.allMails.msg_id}
      </div>
         <div className ="col-sm-4">
            {this.props.allMails.Msg_snippet}
      </div>


       </div>
      </div>
    );
  }
});
module.exports = MyHome;
