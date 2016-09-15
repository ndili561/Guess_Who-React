var React =  require('react')
var CharachterList = require('./CharachterList.jsx')
var CharachterGuess = require('./CharachterGuess.jsx')


var CharachterBox = React.createClass({
  
  getInitialState: function(){
    return { characterList: this.props.characters, character:null }
  },
  

  makeGuess: function(questionId){
    var random = this.state.character
    var list = this.props.charachters    
     for(var i in list){
      if (list[i].gender==="woman"){
        var abc = list[i]
        abc.img = "./images/x.png"
        this.setState({abc: abc})
      }
     }

  },
  startGame: function(){
   var random = this.props.charachters[Math.floor(Math.random() * this.props.charachters.length)];
    this.setState({character: random})
    console.log(this.state.character)

  },
 

  render: function(){
    
    return(
      <div>
        <CharachterList charachters={this.props.charachters}></CharachterList>
        <CharachterGuess  questions={this.props.questions} makeGuess={this.makeGuess} />
        <button type="submit" onClick={this.startGame}>Start Game</button>

    </div>
    )
  }
})

module.exports = CharachterBox