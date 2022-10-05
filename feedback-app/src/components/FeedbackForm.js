import { useState } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');

  function handleTextChange(e) {
    setText(e.target.value);
    if (text.length >= 10) {
      setIsDisabled(false);
      setMessage('');
    } else {
      setMessage('Review must be 10 char long');
    }
  }

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
          <Button type="submit" isDisabled={isDisabled}>
            Sent
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
