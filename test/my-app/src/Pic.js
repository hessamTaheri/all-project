import { useEffect, useState } from "react";

function Pic() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount(count - 1);
  };
  const handleClick3 = () => {
    setCount(count - count);
  };

  const [posts, setPosts] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
        setLoading(false);
        setError("")
      })
      .catch((err) => {
        console.log(err.message)
        setError(err.message)
        setLoading(false);
      });
  });

  return (
    <div>
      <div>
        <button onClick={handleClick}>count +</button>
        <p>{count}</p>
        <button onClick={handleClick2}>count -</button>
        <button onClick={handleClick3}>reset</button>
      </div>
      <h1>Hessam Taheri</h1>
      {error && <h3>{error}</h3>}
      {loading && <h2>Loading ...</h2>}
      {posts && posts.map((post) => <h3 key={post.id}>{post.title}</h3>)}
    </div>
  );
}

export default Pic;
