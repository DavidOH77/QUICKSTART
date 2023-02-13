import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import TodoList from "./pages/TodoList";
import AddTodoList from "./pages/AddTodoList";
import EditTodo from "./pages/EditTodo";
import NotFound from "./pages/NotFound";
import { CallbacksType, StatesType } from "./AppContainer";
import Loading from "./components/Loading";

type PropsType = {
  states: StatesType;
  callbacks: CallbacksType;
};

const App = ({ states, callbacks }: PropsType) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="todos"
            element={<TodoList states={states} callbacks={callbacks} />}
          />
          <Route
            path="todos/add"
            element={<AddTodoList callbacks={callbacks} />}
          />
          <Route
            path="todos/edit/:id"
            element={<EditTodo states={states} callbacks={callbacks} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {states.isLoading ? <Loading /> : ""}
    </Router>
  );
};

export default App;
