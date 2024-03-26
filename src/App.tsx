import './App.css';
import Progress from './components/progress/Progress';
import Filter from './components/filter/Filter';
import TodosGroup from './components/todo/todosGroup/TodosGroup';
import Context from './components/context/Context';

function App() {

  return (
    <Context>
      <div className="App">
        <div className='app-container'>
          <Progress />
          <div className='header-group'>
            <div className='header font-size-24'>Tasks</div>
            <Filter />
          </div>
          <TodosGroup />
        </div>
      </div>
    </Context>
  );
}

export default App;