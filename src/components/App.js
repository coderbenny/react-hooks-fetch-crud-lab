import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

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
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList quizes={allQuestions} />}
    </main>
  );
}

export default App;
