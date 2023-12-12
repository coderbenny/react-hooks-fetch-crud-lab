import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");


  // useState for fetching data from the API
  useEffect(() => (
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  ), [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
