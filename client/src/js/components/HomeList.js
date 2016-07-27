var React = require('react');
var MyHome = require('./MyHome');
var HomeList = React.createClass({
  render: function() {
    var mailNodes = this.props.dataBox.map(function(mail) {
       return (
         <MyHome allMails={mail} key={mail.msg_id}>
         </MyHome>
        );
      });

       return(
      <div className="homeList">
        {mailNodes}
      </div>
    );

  }
});

module.exports = HomeList;
