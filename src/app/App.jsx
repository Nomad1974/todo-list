import AppHeader from "../features/appHeader/AppHeader";
import TodoList from "../features/todoList/TodoList";
import TodoFilter from "../features/todoFilter/TodoFilter";
import ItemAddForm from "../features/itemAddForm/ItemAddForm";
import AppCounter from "../features/appCounter/AppCounter";

import './app.scss';

const App = () => {
  return (
    <section className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <AppCounter />
        <TodoFilter />
      </div>
      <TodoList />
      <ItemAddForm />
    </section>
  );
}

export default App;
