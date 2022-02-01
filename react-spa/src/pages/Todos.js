import { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";

const Todos = () => {
  const { todos, error, getTodos } = useContext(TodoContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    // .then(res => res.json())
    // .then(data => console.log(data))

    // axios.get("https://jsonplaceholder.typicode.com/todos")
    // .then(data => console.log(data.data))
    // .catch(err => console.log(err.message))
    const fetchData = async () => {
      await getTodos();
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row g-3">
          {error && <div>{error}</div>}
        {loading && (
          <div className="col-md-12 text-center">
            <div className="spinner-border mt-5"></div>
          </div>
        )}
        {todos && todos.map((todo) =>
        <div key={todo.id} className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <div>{todo.title}</div>
                    <div>
                    <i className="bi bi-check"></i>
                    </div>
                </div>
            </div>
        </div>
        )}
      </div>
    </div>
  );
};
export default Todos;
