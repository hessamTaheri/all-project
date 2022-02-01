import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import TodoProvider from "./context/TodoProvider";
import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const creatUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc)
  }


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [creatUser]);

  return (
    <BrowserRouter>
      <Header />
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <button onClick={creatUser}>Create User </button>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1> Name : {user.name}</h1>
            <h1> Age : {user.age}</h1>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Increase Age
            </button>
            <button onClick={() => {deleteUser(user.id)}}>
              Delete user
            </button>
          </div>
        );
      })}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/todos"
          element={
            <TodoProvider>
              <Todos />
            </TodoProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
