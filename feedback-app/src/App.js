import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

function App() {
  const title = 'Blog Post';
  const body = 'This is my block post';

  return (
    <>
      <Header text="true" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
