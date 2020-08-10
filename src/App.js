import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const subject = ["Kaitlyn", "Joanne", "Cathy"];

  var subject_array = ["Kaitlyn", "Cathy", "Joanne", "coffee", "boba tea", "chocolate", "pizza", "dumpling", "noodle"]
  var verb_array = ["eats", "drinks"]
 
  const array = subject[0]
  Math.floor((Math.random()*2)+1);


  const array_name  = subject_array[Math.floor(Math.random() * subject_array.length)];
  const array_verb  = verb_array[Math.floor(Math.random() * verb_array.length)];
  const array_obj  = subject_array[Math.floor(Math.random() * subject_array.length)];



  //console.log("here")
  //[pair] value, setValue 
  //change value, update component 
  const [name, setName] = useState(array_name);
  const [verb, setVerb] = useState(array_verb);
  const [obj, setObj] = useState(array_obj);
  // initial value 
  const [sentences, setSentences] = useState([]);
  var targetOfGreeting = "welcome to my website";

  const handleClick = () => {
    console.log(sentences)
    console.log(name)
   
    
    //def variable(on top)
    const array_verb  = verb_array[Math.floor(Math.random() * verb_array.length)];
    const array_obj  = subject_array[Math.floor(Math.random() * subject_array.length)];
    // Set name to previous obj
    setName(obj)
    console.log(obj)
    console.log(name)
    // Set verb to a random verb in verb_array
    setVerb(array_verb)
    console.log(array_verb)
    console.log(verb)
    // Set obj to a random obj in subject_array
    setObj(array_obj)
    console.log(array_obj)
    console.log(obj)
    const sentence = `${name} ${verb} ${obj}`
    console.log(sentence)
    setSentences([...sentences, sentence])
    console.log(sentences)
  }
  return (
    <div className="App" style={{padding: '300px'}}>
      <div>
       Hello there, { targetOfGreeting }!
      </div>
      {/* <ul>
        <li>Kaitlyn</li>
        <li>Cathy</li>
        <li>Joanne</li>
      </ul>
      <ol>
      {subject_array.map((person, i) => (
        <li key={i}>{person} </li>
      ))}
      </ol>
       */}

    <div style={{backgroundColor: '#7550ED'}}>
      <p>Click to see the solitaire</p >
      <ol>
      {sentences.map((sentence, i) => (
        <p key={i}> {sentence} </p >
      ))}
      </ol>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
    </div> 
  );
}


export default App;