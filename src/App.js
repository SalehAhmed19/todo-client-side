import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Todo from "./Pages/Todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
