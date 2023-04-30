import "./App.scss"; // Global
import { useState, useEffect } from "react";
import axios from "axios";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TodoContent } from "../components/Todo/TodoContent";
// import allTodoMock from '../data/todos.json';
import { getSevenDayRange } from "../utils/DateUtils";

function App() {
  // ## LOGIC : HOOK
  const [todos, setTodos] = useState([]); // Orginal todos
  const [filterList, setFilterList] = useState([]); // filter todos

  useEffect(() => {
    // Run After DID MOUNT (เกิดแล้ว)

    async function fetchAllTodo() {
      try {
        // let response = await axios({method:'get', url: "http://localhost:8080/todos"})
        let response = await axios.get("http://localhost:8080/todos");
        let todoList = response.data.todos;
        setTodos(todoList);
        setFilterList(todoList);
      } catch (error) {
        console.log(error.response.status);
      }
    }

    fetchAllTodo();
  }, []);

  useEffect(() => {});

  // ## LOGIC : FN ต่างๆ
  // Filter Todo
  const handleFilterLists = (index) => {
    const [nowStr, nextSevenStr] = getSevenDayRange();

    let filteredTodo = [...todos];

    // FILTER LOGIC : Schema for fillter "2023-04-29" == YYYY-MM-DD
    if (index === 0) {
      setFilterList(todos);
    } else if (index === 1) {
      filteredTodo = todos.filter((todoObj) => todoObj.date === nowStr);
      setFilterList(filteredTodo);
    } else if (index === 2) {
      filteredTodo = todos.filter(
        (todoObj) => todoObj.date >= nowStr && todoObj.date <= nextSevenStr
      );
      setFilterList(filteredTodo);
    }
  };

  // Search Todo
  const handleSearch = (searchText) => {
    const newTodo = todos.filter((todoObj) =>
      todoObj.task.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    // setTodos(newTodo)
    setFilterList(newTodo);
  };

  return (
    <div className="container">
      <Header onSearchText={handleSearch} />
      <Sidebar onSelectTab={handleFilterLists} />
      <TodoContent
        todos={filterList}
        setTodos={setTodos}
        setFilterList={setFilterList}
      />
    </div>
  );
}

export default App;
