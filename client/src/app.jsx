var React = require('react');
var ReactDOM = require('react-dom');
var CharachterBox = require('./components/CharachterBox.jsx')

var charachters = [{id:0,name: "Melanie",img: "/images/pic.jpg",gender:"woman"}, {id: 1,name: "Helen",img:"./images/20.jpg",gender:"woman"},{id:3,name:"Charlie", img:"./images/22.jpg", gender:"man"}, {id:4,name:"Jonathan",img:"./images/27.jpg",gender:"man"},{id:5, name:"George",img:"./images/40.jpg",gender:"man"},{id:6, name:"Elizabeth",img:"./images/50.jpg", gender:"woman"}]

var questions = [{id: 1,question:"Does the charachter have glasses?"},{id: 2,question:"Does the charachter have hair?"}, {id: 3,question: "Is the charachter a man?"}]



window.onload = function(){
  ReactDOM.render(
     <CharachterBox questions={questions} charachters={charachters}/>,
    document.getElementById('app')
  );
}

