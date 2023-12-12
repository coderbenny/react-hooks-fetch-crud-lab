import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ quizes }) {
  console.log(quizes)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {quizes.map((question) => {
          return (
            <QuestionItem key={question.id} question={question} />)
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
