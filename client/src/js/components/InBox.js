var React=require('react');
var InBoxList = require('./InBoxList');
var InBox = React.createClass({
  getInitialState: function(){
     return{AllData:[]}
  },
  render: function() {
    $.ajax({
  url:"http://localhost:8080/mailbox",
  type:'GET',
  datatype:"JSON",
  success: function(data)
  {
    console.log(data);
    this.setState({AllData:data});

  }.bind(this),
  error: function(err)
  {
    console.log(err);
  }.bind(this)
});
    return (
      <div className="mailBox">
        <InBoxList dataBox = {this.state.AllData}/>
      </div>
    );
  }
});

module.exports=InBox;
