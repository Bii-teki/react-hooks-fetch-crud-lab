import React from "react";

function QuestionItem({ question, onDeleteItem, onUpdateItem }) {
  const { id, prompt, answers, correctIndex } = question;
  console.log(question.id)
  console.log(question.answers)
  
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(e) {
    e.preventDefault()
    fetch(`http://localhost:4000/questions/${question.id}`,{
    method: "Delete",
  })
    .then(r=>r.json())
    .then(()=>onDeleteItem(question))

  }
  function handleUpdate(e) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: Number.parseInt(e.target.value),
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
  }


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <select
          defaultValue={correctIndex}
          onChange={handleUpdate}
        >
          {options}
        </select>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
