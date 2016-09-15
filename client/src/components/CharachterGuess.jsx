var React = require('react')



var CharachterGuess = React.createClass({

  getInitialState: function(){
     return{index: 0}
  },

  handleChange: function(e){
    var index = e.target.value
    this.setState({index: index})
  },

  makeGuess: function(){
    var questionId = this.state.index
    this.props.makeGuess(questionId)
  },



  render: function(){

    var options = this.props.questions.map(function(question, index){
     return <option value={question.id} key={index}>{question.question}</option>;
    });
 
    return(
      <div className="questions">
        <select onChange={this.handleChange}>
          {options}
        </select>
        <button type="submit" onClick={this.makeGuess}>Guess</button>
      </div>

      )

  }
})

module.exports = CharachterGuess