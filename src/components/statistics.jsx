import Feedback from "./feedback"
import countTotalFeedback from "./feedback"

export default function Statistics() {

    return (
        <div >
      <h1>Please leave feedback</h1>
      <button onClick={handleChange} style={{marginRight: "10px"}}>Good</button>
      <button onClick={handleChange} style={{marginRight: "10px"}}>Neutral</button>
      <button onClick={handleChange} style={{marginRight: "10px"}}>Bad</button>
      {countTotalFeedback() > 0 ? (
        <div>
          <h3>Good: </h3>
          <h3>Neutral: </h3>
          <h3>Bad: </h3>
          <h3>Total: {countTotalFeedback()}</h3>
          <h3>Positive feedback: {countPositiveFeedbackPercentage() }</h3>
        </div>
      ) : (
        <h3>No Feedback</h3>
      )}
    </div>
    )
}