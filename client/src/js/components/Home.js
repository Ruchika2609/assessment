var React=require('react');
var HomeList = require('./HomeList');
var Home=React.createClass({
  getInitialState: function(){
     return{Data:[]}
  },
  render:function()
  {
    $.ajax({
  url:"http://localhost:8080/data/data.json",
  type:'GET',
  datatype:"JSON",
  success: function(data)
  {
    console.log(data);
    this.setState({Data:data});

  }.bind(this),
  error: function(err)
  {
    console.log(err);
  }.bind(this)
});
    return(
      <div className="home">
      <div className="jumbotron">
  				<h2>
  				Welcome to your mail box
  				</h2>
  				<p>
  					This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
  				</p>
  			</div>
        <br/>
        <div >
          <HomeList dataBox= {this.state.Data}/>
        </div>
        </div>
    );
  }
});
module.exports=Home;
