import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {

  // State for all questions
  const [allQuestions, setAllQuestions] = useState([])

  // State for when data is loading
  const [isLoading, setIsLoading] = useState(true)

  // useState for fetching data from the API
  useEffect(() => (
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(data => {
        setAllQuestions(data)
        setIsLoading(false)
      })
      .catch(error => console.error("An error occured when fetching data!", error))
  ), [])

  // If statement for setting the loading function
  if (isLoading) {
    return (
      <h2>Loading Questions...</h2>
    )
  }


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {allQuestions.map((question) => {
          return (
            <QuestionItem key={question.id} question={question} />)
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
