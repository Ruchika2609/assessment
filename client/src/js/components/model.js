var React = require('react');

var model = React.createClass({
    render: function() {
    return (
      <div className="model">
      <div class="container-fluid">
<div class="row">
<div class="col-md-12">
 <a id="modal-174654" href="#modal-container-174654" role="button" class="btn" data-toggle="modal">Launch demo modal</a>

<div class="modal fade" id="modal-container-174654" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">

        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
          ×
        </button>
        <h4 class="modal-title" id="myModalLabel">
          Modal title
        </h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-default" data-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>

  </div>

</div>

</div>
</div>
</div>
      </div>

    );
  }
});
module.exports = model;
