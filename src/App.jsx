import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { Button, ProgressBar } from "react-bootstrap";

function ReactionBar({ likeCount, dislikeCount }) {
  const totalCount = likeCount + dislikeCount;

  if (totalCount === 0) {
    return null;
  }

  return (
    <ProgressBar className="mt-3">
      <ProgressBar variant="success" now={Math.round(likeCount * 100 / totalCount)} />
      <ProgressBar variant="danger" now={Math.round(dislikeCount * 100 / totalCount)} />
    </ProgressBar>
  );
}

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
      <ReactionBar likeCount={likeCount} dislikeCount={dislikeCount} />
    </div>
  )
}

export default App
