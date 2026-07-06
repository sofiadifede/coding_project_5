//Task List
//task card components from an array of objects
//this component receives the tasks array and the onToggle and onDelete functions as props from the TaskBoard component
//doesn't need interactivity, but passes onToggle and onDelete callbacks through to the Task Card.
'use client';

import TaskCard from "./TaskCard";

// renders a list of TaskCard components based on the tasks array passed as a prop
// conditional rendering is used to display a message when there are no tasks

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-slate-400 text-center font semi-bold py-10 text-lg">
        No tasks yet. Add one to get started! 🎉
      </p>
    );
  }

//maps over the tasks array and renders a TaskCard component for each task
//passes the task properties and the onToggle and onDelete functions as props to each TaskCard
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard
          key={task.id ?? index}
          id={task.id}
          title={task.title}
          done={task.done}
          //pass-through layer between TaskBoard and TaskCard, allowing TaskCard to call the onToggle and onDelete functions when the user interacts with the task
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}