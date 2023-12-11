import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { Button } from "react-bootstrap";

function App() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  function increaseLike() {
    setLikeCount(likeCount + 1);
  }

  function increaseDislike() {
    setDislikeCount(dislikeCount + 1);
  }

  return (
    <div className="m-3 text-center">
      <Button variant="success" className="me-1" onClick={increaseLike}>Like {likeCount}</Button>
      <Button variant="danger" className="ms-1" onClick={increaseDislike}>Dislike {dislikeCount}</Button>
    </div>
  )
}

export default App
