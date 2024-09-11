import React, { useEffect, useState } from "react";
import "../../App.css";
function ToDoApp(props) {
  const [tasks, setTasks] = useState(props.tasks || []);
  const [taskName, setTaskName] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const taskList = tasks
    .filter((task) => {
      if (filter === "active") {
        return !task.completed;
      } else if (filter === "completed") {
        return task.completed;
      } else {
        return true;
      }
    })
    .map((task, index) => (
      <ul role="list" id="myUl" key={index}>
        <div className="list-items">
          <div className="inline">
            <label>
              <input
                type="checkbox"
                style={{ width: "4%" }}
                checked={task.completed}
                onChange={() => handleTaskChange(index)}
              ></input>
              {task.name}
            </label>
            <div>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>
        </div>
      </ul>
    ));

  const addTask = () => {
    if (taskName.trim() !== "") {
      const newTask = {
        name: taskName,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setTaskName("");
    } else {
      alert("Please enter a task name.");
    }
  };

  const editTask = (index) => {
    const updatedTaskName = prompt("Enter the new task name:");
    if (updatedTaskName !== null && updatedTaskName.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index].name = updatedTaskName;
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const clearList = () => {
    setTasks([]);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>To do app</h1>

      <div>
        <input
          type="text"
          id="newTask"
          className="input input__lg"
          placeholder="Type your text here"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{ margin: "left" }}
        />
        <button onClick={addTask} className="btn btn__primary btn__lg">
          Add
        </button>
        <br></br>
      </div>

      <div>
        <button onClick={() => handleFilterChange("all")}>
          Show all tasks
        </button>
        <button onClick={() => handleFilterChange("active")}>
          Show active tasks
        </button>
        <button onClick={() => handleFilterChange("completed")}>
          Show completed tasks
        </button>
      </div>
      <div style={{ padding: "10px" }}>
        <button onClick={clearList}>Clear List</button>
      </div>

      <ul role="list" id="myUl">
        <div className="list-items" id="newli">
          {taskList}
        </div>
      </ul>
    </div>
  );
}

export default ToDoApp;
