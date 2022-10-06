import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const {feedback, setFeedback} = useState([
    {
      id:1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, dolor facilis iure ea nihil fugiat facere hic unde consequatur numquam autem, quasi natus, ad nesciunt amet? Aliquam delectus recusandae voluptatem.",
      rating: 10,
    }
  ])


  return <FeedbackContext.Provider value={{
    feedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext