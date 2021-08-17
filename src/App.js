import './App.css';
import { Header, Input, TaskList, Copyright, About } from './components';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  const [tasks, setTasks] = useState([])

  const [showAddTask, setShowAddTask] = useState(false);

  // toggle Add Task
  function toggleAddTask() {
    setShowAddTask(!showAddTask);
  }

  // add Task
  function addTask(task) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }

  // delete Task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  function toggleReminder(id) {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header showAddTask={showAddTask} toggleAddTask={toggleAddTask} />
        <Route path='/' exact render={(props) => (
          <>
            {
              showAddTask
                ? <Input addTask={addTask} />
                : null
            }
            {
              tasks.length > 0
                ? <TaskList tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />
                : <h3 style={{ color: 'gray' }}>No Tasks!</h3>
            }
          </>
        )} />
        <Route path='/about' component={About} />
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
