import React, { useState, useEffect } from 'react';
import './LinkedList.css';
import ButtonsLLComp from './ButtonsLLComp';
import CurrentLLNodeComp from './CurrentLLNodeComp';
import NewLLNodeComp from './NewLLNodeComp';
import lList from '../scripts/lList.js'

const subjectList = new lList.LinkedList ();
let totalAmount = 0;

function LinkedList(props) {

  //
  // Using Larry's idea of "todo" for state since it is dictating most of
  // the screen change renders.
  //

  const [todo, setToDo] = useState("");
  
  //
  // Added "currentNode" into state since "todo" doesn't change for when
  // performing more than one next or previous in a row. Only need to set
  // "currentNode" state for these navigational calls. "todo" works for all
  // other renders.
  //
  const [currentNode, setCurrentNode] = useState();

  // const [totalAmount, setTotalAmount] = useState(0);

  const onSaveLLNodeBef = (s, a) => {
    // console.log(s, a);
    subjectList.insertBefore(s, a);
    setToDo('show');
  }

  const onSaveLLNodeAft = (s, a) => {
    // console.log(s, a);
    subjectList.insertAfter(s, a);
    setToDo('show');
  }
  
  // const onShow = () => {
  //   setToDo('show');
  // }
  
  const onClick = async (e) => {
    const todo = e.target.getAttribute('todo');
    
    console.log('onClick', todo);
    if (todo) {
      setToDo(todo);
      
      if (todo === 'first') {
        subjectList.first();
      } 
      else if (todo === 'next') {
        subjectList.next();
      } 
      else if (todo === 'prev') {
        subjectList.previous();
      }
      else if (todo === 'last') {
        subjectList.last();
      }
      else if (todo === 'total') {
        let tempTotal = subjectList.total();
        totalAmount = tempTotal;
        // console.log("tempTotal = " + tempTotal);
        // setTotalAmount(tempTotal);
        // console.log("totalAmount = " + totalAmount);
      }
      if (subjectList.current !== null) setCurrentNode(subjectList.current);
    }
  }

  let output = [];
  // console.log("todo = ", todo);
  // if (subjectList.current.prevPtr) 
  //   console.log(subjectList.current.prevPtr);
  // else console.log("Null");
  // if (subjectList.current.nextPtr) 
  //   console.log(subjectList.current.nextPtr);
  // else console.log("Null");

  if (todo === "newbefore") {
    output.push(<NewLLNodeComp key="newbefore" onSave={onSaveLLNodeBef} ptxtColor={props.ptxtColor} />);
  }
  else if (todo === "newafter") {
    output.push(<NewLLNodeComp key="newafter" onSave={onSaveLLNodeAft} ptxtColor={props.ptxtColor} />);
  }
  else {
    if (subjectList.current != subjectList.head) {
      // setCurrentNode(subjectList.current);
      output.push(<CurrentLLNodeComp 
        key="current" 
        subjects={subjectList} 
        ptotalAmount={totalAmount}
        ptxtColor={props.ptxtColor}
      />);
    }
    output.push(<ButtonsLLComp key="buttons" />);
  }

  return (
    <div>
      <div onClick={onClick} className="App clBox">
        <h1 style={{color: `${props.ptxtColor}`}}>{props.sMessageArea} for Linked List - Competency 140D</h1>
          {output}
      </div>
    </div>
  );
}

export default LinkedList;