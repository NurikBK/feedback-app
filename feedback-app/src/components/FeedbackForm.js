import { useState } from 'react';
import Card from '../shared/Card';

function FeedbackForm() {
  const [text, setText] = useState('');
  function handleTextChange(e) {
    setText(e.target.value);
  }
  console.log(text);

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us</h2>
        {/* todo - rating select component*/}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            name="text"
            value={text}
            placeholder="Write a review"
          />
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
