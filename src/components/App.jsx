import Feedback from "./feedback";
import { useState } from "react";

export const App = () => {
  const [feedback, setFeedback] = useState({ Good: 0, Neutral: 0, Bad: 0});
  return (
    <div>
      
      <Feedback />
    </div>
  );
};
