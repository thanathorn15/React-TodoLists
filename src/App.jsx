import "./App.scss";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { TodoContent } from "./components/Todo/TodoContent";

function App() {
  return (
    <div className="container">
      {/* header */}
      <Header />
      <Sidebar />
      <TodoContent/>
      </div>
  );
}

export default App;
