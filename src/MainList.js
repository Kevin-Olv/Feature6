import React from "react";

/*PARENT COMPONENT */

/* Entire Kanban Board Functionality*/
const MainList = () => {
  return (
    <div>
      <title>Feature 6 Kanban Board</title>
      <script src="kanbanFunc.js"></script>
      <link rel="stylesheet" href="kanban.css"></link>
    <div class="container">
        <div class="kanban-heading">
            <strong class="kanban-heading-text">Feature 6 Kanban Board</strong>
        </div>
        <div class="kanban-board">
            <div class="kanban-block" id="todo" ondrop="drop(event)" ondragover="allowDrop(event)">
                <strong>To Do</strong>
                <div class="task-button-block">
                    <button id="task-button" onclick="createTask()">Create new task</button>
                </div>
            </div>
            <div class="kanban-block" id="inprogress" ondrop="drop(event)" ondragover="allowDrop(event)">
                <strong>In Progress</strong>
            </div>
            <div class="kanban-block" id="done" ondrop="drop(event)" ondragover="allowDrop(event)">
                <strong>Done</strong>
            </div>
            <div class="create-new-task-block" id="create-new-task-block">
                <strong>New Task</strong>
                <span class="form-row">
                    <label class="form-row-label" for="task-name">Task</label>
                    <input class="form-row-input" type="text" name="task-name" id="task-name"></input>
                </span>
                <span class="form-row">
                    <label class="form-row-label" for="task-name">Status</label>
                    <select class="form-row-input" name="task-status" id="task-status">
                        <option value="todo">To Do</option>
                        <option value="inprogress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </span>
                <span class="form-row-buttons">
                    <button id="save-button" onclick="saveTask()">Save</button>
                    <button id="cancel-button" onclick="createTask()">Cancel</button>
                </span>
            </div>
        </div>
    </div>

    </div>
  );
};

export default MainList;
