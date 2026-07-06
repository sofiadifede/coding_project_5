//Task Board
//'use client' is required for UseState and UseEffect hooks and defines handleToggle, handleDelete, handleAdd, and handleClearCompleted functions.
//container for the task manager and holds the task list, localstorage, and filters. 
'use client';
import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";
import TaskStats from "./TaskStats";

//default tasks before any additional tasked are added by the user
//to prevent duplication errors, this is the only place where the default tasks are defined. The default tasks are not saved to localStorage, so they will only appear on the first load of the app.
const defaultTasks = [
  { id: 1, title: "Buy groceries", done: true },
  { id: 2, title: "Write report", done: false },
  { id: 3, title: "Call mom", done: true },
];

export default function TaskBoard() {
    //full list of tasks are here
    //cannot be computed from the visible tasks, because the visible tasks are filtered by the current filter
  const [tasks, setTasks] = useState(defaultTasks);
  //holds the filters, like all, active, and done
  const [filter, setFilter] = useState("all");
  //tracks the loaded and saved tasks from localstorage
  const [hasLoaded, setHasLoaded] = useState(false);

  //load tasks from localStorage on initial render and save tasks to localStorage whenever they change
  //this is done to persist the tasks across page reloads and browser sessions
  useEffect(() => {
    try {
      const stored = localStorage.getItem("tasks");
      if (stored) {
        setTasks(JSON.parse(stored));
      }
    } catch {
        //if the data in localStorage is corrupted or not valid JSON, we will catch the error and keep the default tasks
      //in case data is interrupted or wrong, keep defaultTasks
    }
    setHasLoaded(true);
  }, []);

  //saves the current tasks to localStorage whenever they change, but only after the initial load
  //dependency array [tasks, hasLoaded] includes tasks and hasLoaded, so that the effect runs whenever either of them changes
  useEffect(() => {
    if (!hasLoaded) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, hasLoaded]);

  //counts how many tasks are not done
//this is used to update the document title and show how many tasks are remaining
  const activeCount = tasks.filter((task) => !task.done).length;

  //updates the document title to show how many tasks are remaining
  useEffect(() => {
    document.title = `${activeCount} tasks remaining`;
  }, [activeCount]);

  //function to toggle the done status of a task by its id
  //this is done by mapping over the tasks and updating the done property of the task with the matching id
  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };
//function to delete a task by its id
//deletion is triggered here and handed down as a prop to the TaskCard component, which calls this function when the delete button is clicked
  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
//function to add a new task with a unique id and default done status of false
  const handleAdd = (title) => {
    const newTask = { id: crypto.randomUUID(), title, done: false };
    setTasks([...tasks, newTask]);
  };
//function to clear all completed tasks from the list
//this is triggered by the "Clear completed" button in the TaskStats component, which calls this function when clicked
  const handleClearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.done));
  };
//counts how many tasks are completed
  const completedCount = tasks.filter((task) => task.done).length;
//determines which tasks to show based on the current filter
  const visible =
    filter === "all"
      ? tasks
      : filter === "active"
      ? tasks.filter((t) => !t.done)
      : tasks.filter((t) => t.done);

  return (
    <div>
      <AddTaskForm onAdd={handleAdd} />

      <TaskStats
        total={tasks.length}
        completed={completedCount}
        active={activeCount}
        onClearCompleted={handleClearCompleted}
      />

      <div className="flex gap-2 mb-4">
        {["all", "active", "done"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-sm px-4 py-1.5 rounded border capitalize ${
              filter === f
                ? "bg-blue-500 text-white border-blue-500"
                : "hover:bg-gray-100"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <TaskList tasks={visible} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

// condition render/styling for the filter buttons, which allow the user to switch between viewing all tasks, only active tasks, or only completed tasks
// equality check is used to determine which filter is currently active and apply the appropriate styling
