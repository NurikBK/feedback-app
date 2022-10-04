import { useState } from 'react';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/feedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  function handleDelete(id) {
    setFeedback((prevData) => prevData.filter((item) => item.id != id));
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
