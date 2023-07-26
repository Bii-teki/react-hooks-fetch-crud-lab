import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";


function QuestionList() {

  const [answers, setAnwers] = useState([])
  const [state, setState] = useState("true")

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
          .then(r=>r.json())
          .then(results=>setAnwers(results))
  }, [])

  function handleAddItem(newItem) {
    
    setAnwers([...answers, newItem])
  }
  
  function handleDelete(deletedItem) {
    const updatedItems = answers.filter((item)=>
    item.id !== deletedItem.id)
    setAnwers(updatedItems)
  
  }
  function handleUpdate(updatedItem) {
    
    const updatedItems = answers.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItems;
      } else {
        return item;
      }
    });
    setAnwers(updatedItems);
    
  }
  if(state=== true) {
    
    <QuestionForm handleAddItem={handleAddItem}/>
    setState=("false")
  }
  else{
  
  return (
    <section>
      <h1>Quiz Questions</h1>
  
      <ul>
      {answers.map((answer)=>
      <QuestionItem 
        question ={answer}
        key={answer.id}
        onDeleteItem={handleDelete}
        onUpdateItem={handleUpdate}
        
        />)}
        {/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}}

export default QuestionList;
