import { useState } from 'react';

export default function Statistics() {
  const [feedback, setFeedback] = useState({ Good: 0, Neutral: 0, Bad: 0, Total: 0});
  //helper methods
  function countTotalFeedback() {
    return feedback.Total = feedback.Good + feedback.Neutral + feedback.Bad;
  }
  function countPositiveFeedbackPercentage() {
    console.log(feedback.Total)
    return Math.ceil((feedback.Good / feedback.Total) * 100) + "%";
  }
  //to update our state
  function handleChange(event) {
    // console.log(feedback[event.target.textContent])
    setFeedback(prev => {
      return {
        ...prev,
        [event.target.textContent]: prev[event.target.textContent] + 1
      };
    });

    
  }
//   console.log(feedback);
  return (
    <div >
      <h1>Please leave feedback</h1>
      <button onClick={handleChange} style={{marginRight: "10px"}}>Good</button>
      <button onClick={handleChange} style={{marginRight: "10px"}}>Neutral</button>
      <button onClick={handleChange} style={{marginRight: "10px"}}>Bad</button>
      <h2>Statistics</h2>
      {countTotalFeedback() > 0 ? (
        <div>
          <h3>Good: {feedback.Good}</h3>
          <h3>Neutral: {feedback.Neutral}</h3>
          <h3>Bad: {feedback.Bad}</h3>
          <h3>Total: {countTotalFeedback()}</h3>
          <h3>Positive feedback: {countPositiveFeedbackPercentage() }</h3>
        </div>
      ) : (
        <h3>No Feedback</h3>
      )}
    </div>
  );
}