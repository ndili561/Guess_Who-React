var React = require('react')
var Charachter = require('./Charachter.jsx')

var CharachterList = React.createClass({

  render: function(){
    var charachterNode = this.props.charachters.map(function(charachter){
      return(
        <div className="container">
        <div className = "box">
        <Charachter key={charachter.id} charachter={charachter}  />
        </div>
        </div>
        )
    });
    return (
      <div>
        {charachterNode}  
      </div>
    );

  }
  
});

module.exports = CharachterList