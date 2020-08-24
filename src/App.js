import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  const subject_array = ["Kaitlyn", "Cathy", "Joanne", "coffee", "boba tea", "chocolate", "pizza", "dumpling", "noodle"]
  const verb_array = ["enjoys", "tastes", "plays", "smells", "wants", "owns"]
  Math.floor((Math.random()*2)+1);

  const array_name  = subject_array[Math.floor(Math.random() * subject_array.length)];
  const array_verb  = verb_array[Math.floor(Math.random() * verb_array.length)];
  const array_obj  = subject_array[Math.floor(Math.random() * subject_array.length)];

  //console.log("here")
  //[pair] value, setValue 
  //change value, update component 
  const [name, setName] = useState(array_name) 
  const [verb, setVerb] = useState(array_verb)
  const [obj, setObj] = useState(array_obj)
  // initial value 
  const [sentences, setSentences] = useState([`${name} ${verb} ${obj}`])
  var targetOfGreeting = "welcome to my website";

  // initial value 
  const [sub, setSub] = useState(subject_array)
  const [ver, setVer] = useState(verb_array)
  // const [sub, setSub] = useState([])
  // const [ver, setVer] = useState([])
  const [itemText, setItemText] = useState("")
  const [verbText, setVerbText] = useState("")
  const [removeWords, setRemoveWords] = useState(false)

  
console.log(itemText)

  const handleClick = () => {
    /* Array.prototype.filter() to create a new array */
    const newSub = sub.filter(x => x != obj)
    const newVer = ver.filter(x => x != verb)

    if (newSub.length === 0|| newVer.length === 0){
      if (removeWords) {
        setSub(newSub) 
        setVer(newVer)
        return
      }    
    }

    //def variable(on top)
    
    const aVerb  = removeWords ? newVer[Math.floor(Math.random() * newVer.length)] : ver[Math.floor(Math.random() * ver.length)]
    const aSub  = removeWords ? newSub[Math.floor(Math.random() * newSub.length)] : sub[Math.floor(Math.random() * sub.length)]
    
    const sentence = `${obj} ${aVerb} ${aSub}`
  
    setSentences([...sentences, sentence])
    if (removeWords) {
      setSub(newSub)
      setVer(newVer)
    }
    
    // Set name to previous obj
    setName(obj)
    // Set verb to a random verb in verb_array
    setVerb(aVerb)
    // Set obj to a random obj in subject_array
    setObj(aSub)

  }

  const handleItemSubmit = () => {
    setSub([...sub, itemText])
    setItemText("")
  }

  const handleVerbSubmit = () => {
    setVer([...ver, verbText])
    setVerbText("")
  }

  console.log(ver)
  console.log(removeWords)
  return (
    <div className="App" style={{margin: '50px', backgroundColor: '#cfe8fc'}}>
      <div>
       Hello there, { targetOfGreeting }!
      </div>

      <p>List of Items: {sub.join(", ")} </p >
      <p>Verbs to choose from: {ver.join(", ")} </p >
      <div>
        <input type="text" value={itemText} onChange={(e) => { setItemText(e.target.value)}} />
        <button onClick={handleItemSubmit} >Add an item</button>     
      </div>
      <div>
        <input type="text" value={verbText} onChange={(e) => { setVerbText(e.target.value)}} />
        <button onClick={handleVerbSubmit} >Add a verb</button> 
      </div>

      <div>
        <input type="checkbox" value={removeWords} onChange={(e) => { setRemoveWords(!removeWords)}} />
        <span>Remove verbs and objects that are used</span>
      </div>

      <p>Click to see the solitaire</p >
      <ol>
      {sentences.map((sentence, i) => (
        <p key={i}> {sentence} </p >
      ))}
      </ol>
      <div>{sub.length === 0 || ver.length === 0 ? <p>Out of items or verbs...</p > : null}</div>
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
    
      
    </div>
      
{/*         
        <p>{}</p > */}
      {/* COMMAND KC COMMAD KU */}
      {/* <header className="App-header">
        < img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p >
        <a
          className="App-link"
          href=" "
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a >
      </header> */}
    </div>
  );
}

export default App;