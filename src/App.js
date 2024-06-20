
import './App.css';
import React from 'react'



  const set1 = [["P", "A", "I", "N", "T"],["H", "E", "L", "L", "O"],
  ["H", "O", "B", "B", "Y"],
["H", "O", "N", "E", "Y"]];

class App extends React.Component {


constructor(props) {

super(props);

this.state = {
words: set1,
currentWordIndex: 0,
displayedLetters: [],
correctWord: 'HONEY'

};
this.ready = true
}

componentDidMount() {
  if(this.ready){
this.displayNextLetter(0);
 
  this.ready = false

 console.log('test')
  }
  
}

displayNextLetter(index) {

setTimeout(() =>{
if(index > 4){
this.changeWords()
return
}

const arr = this.state.displayedLetters
arr.push(this.state.words[this.state.currentWordIndex][index])

this.setState({
displayedLetters: arr
})
this.changeColor(index)
index++
this.displayNextLetter(index)
}
, 1000)

}

changeWords = () =>{

setTimeout(() =>{
  
if(this.state.currentWordIndex + 1 > this.state.words.length -1){
this.setState({
currentWordIndex: 0,
displayedLetters: []
})
for(let i = 0; i < 5; i++){
const id = 'box-' + i;

document.getElementById(id).classList.remove('green', 'pink', 'grey');

}

this.displayNextLetter(0)
} else {
this.setState({
currentWordIndex: this.state.currentWordIndex + 1,
displayedLetters: []
}) 
for(let i = 0; i < 5; i++){
const id = 'box-' + i;

document.getElementById(id).classList.remove('green', 'pink', 'grey');

} 
this.displayNextLetter(0)
}
}, 2000)}


changeColor = (index) =>{
setTimeout(() =>{
if(index > 4){
return
}
const id = 'box-' + index

if(this.state.displayedLetters[index] == this.state.correctWord.charAt(index)){

document.getElementById(id).classList.add('green')
} else if (this.state.correctWord.includes(this.state.displayedLetters[index])){
document.getElementById(id).classList.add('pink')
} else{
document.getElementById(id).classList.add('grey')
}
index++
this.changeColor(index)
}
  , 1000) 
}


render() {

return (
<div>
<div id="root">
<div id="container">
<div className="title-container">

<span>S</span><span>h</span><span>a</span><span>i</span><span>n</span><span>a</span><span>n</span><span>i</span><span>g</span><span>a</span><span>n</span><span>s</span>

</div>
<button>Play Now</button>
</div>

<div id="game">


<div id='box-0' className='box'>{this.state.displayedLetters[0]}</div>
<div id='box-1' className='box'>{this.state.displayedLetters[1]}</div>
<div id='box-2'className='box'>{this.state.displayedLetters[2]}</div>
<div id='box-3' className='box'>{this.state.displayedLetters[3]}</div>
<div id='box-4' className='box'>{this.state.displayedLetters[4]}</div>
</div>

</div>
</div>
);
}
} 




export default App;
