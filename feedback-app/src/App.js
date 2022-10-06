import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/feedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutLink from './components/AboutLink';

import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  function handleDelete(id) {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id != id));
    }
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={handleDelete} />
                <AboutLink />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </FeedbackProvider>
  );
}

export default App;
