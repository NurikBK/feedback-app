 import Header from "./components/Header";

function App() {
  const title = "Blog Post"
  const body ="This is my block post"

  return (
    <>
      <Header />
      <div className="container">
        <h1> {title} </h1>
        <p> {body} </p>
      </div>
    
    </>
  )
}

export default App;
