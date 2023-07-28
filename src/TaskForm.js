import React, { useState } from "react";
import "./App.css";
export default function TaskForm({ Addtask }) {
  const [taskName, setTaskName] = useState("");
  function handelTask(e) {
    e.preventDefault();
    Addtask(taskName);
    setTaskName("");
  }
  return (
    <form onSubmit={handelTask}>
      <button>+</button>
      <input
        type="text"
        placeholder="What is Your Next Task"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
      />
    </form>
  );
}
