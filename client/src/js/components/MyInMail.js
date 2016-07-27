var React = require('react');
var model = require('./model');
var MyInMail = React.createClass({

    render: function() {
    return (
      <div className="mail">
      <div className="col-md-12 container">
       <div className ="col-sm-4">
        <a id="modal-47626" href="#modal-container-47626" role="button" className="btn" data-toggle="modal">  {this.props.allMails.msg_id}</a>
        </div>
       <div className ="col-sm-4">
              {this.props.allMails.Msg_snippet}
      </div>
         <div className ="col-sm-4">
                {this.props.allMails.Msg_data}
      </div>
       </div>
       <model mydata = {this.props.allMails}/>
      </div>

    );
  }
});
module.exports = MyInMail;
