import { TaskCard } from "./TaskCard/TaskCard";
import { Button } from "./Buttons/Button";
import "./MainContainer.css";
import { useEffect, useRef, useState } from "react";

function MainContainer() {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);

  const addTask = () => {
    if (task) {
      setTaskArr([...taskArr, task]);
      setTask("");
    }
  };

  const clearTask = () => {
    setTaskArr([]);
  };
  return (
    <>
      <div className="mainContainer">
        <h2>Todo App</h2>
        <input
          id="addTodoInput"
          placeholder="Add your new todo"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <Button className="plusButton" title="+" onclick={addTask} />
        <div className="taskContainer">
          {taskArr.map((val, key) => {
            return <TaskCard className="taskCard" tasktitle={val} key={key} />;
          })}
        </div>
        <div className="bottomContainer">
          <h4 className="pendingTask">
            You have {taskArr.length} pending task
          </h4>
          <Button
            className="clearAllButton"
            title="Clear All"
            onclick={clearTask}
          />
        </div>
      </div>
    </>
  );
}

export { MainContainer };
