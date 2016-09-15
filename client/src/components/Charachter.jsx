var React  = require('react')

var Charachter = React.createClass({

  render: function(){

    return(
      <div>
        <h2>
          {this.props.charachter.name}
        </h2>
        <h2>
          <img src={this.props.charachter.img}/>
        </h2>
      </div>
      )
  }
  
})




module.exports = Charachter;