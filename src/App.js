import { useState } from "react";
import "./App.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

function App() {
  const [task, setTask] = useState([]);
  function Addtask(name) {
    setTask([...task, { name, done: false }]);
  }
  function updateTaskDone(taskIndex, newDone) {
    setTask((prev) => {
      const newTask = [...prev];
      newTask[taskIndex].done = newDone;
      return newTask;
    });
  }

  const numbeCompleted = task.filter((t) => t.done).length;
  const totalNumber = task.length;
  function getMasseage() {
    const percentage = (numbeCompleted / totalNumber) * 100;
    if (percentage === 0) {
      return "Try to do at least one ";
    }
    if (percentage === 100) {
      return "Try to do at least one";
    }
    return "Keep it Up 👏";
  }
  function removetask(taskIndex) {
    setTask((pre) => {
      return pre.filter((taskinfo, index) => index !== taskIndex);
    });
  }
  function remaneTask(index, newName) {
    setTask((pre) => {
      const newTask = [...pre];
      newTask[index].name = newName;
      return newTask;
    });
  }
  return (
    <main>
      <h1>
        {numbeCompleted}/{totalNumber}
      </h1>
      <h2>{getMasseage()}</h2>
      <TaskForm Addtask={Addtask}></TaskForm>
      {task.map((task, index) => (
        <Task
          {...task}
          key={index}
          onRename={(newName) => remaneTask(index, newName)}
          onTrash={() => removetask(index)}
          onToggle={(done) => updateTaskDone(index, done)}
        />
      ))}
    </main>
  );
}

export default App;
