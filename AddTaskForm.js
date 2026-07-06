//Add Task Form
//text input and submit button for adding new tasks to the task list
//this component is a form that allows the user to add a new task to the task list
//'use client' is required because this component uses useState hook and interactivity, which are client-side features
'use client';

import { useState } from "react";

export default function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
//handleSubmit is called when the form is submitted, it prevents the default form submission behavior, trims the title, checks if it's not empty, calls the onAdd callback with the trimmed title, and resets the title state to an empty string
  const handleSubmit = (e) => {
    //e.preventDefault() is used to prevent the default form submission behavior, which would cause a page reload
    //without this, the form would submit and reload the page, which is not desired in a single-page application
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    //reset the controlled input after a successful submission, so that the user can add another task without having to manually clear the input field
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-5">
      <input
        type="text"
        //value={title} makes the input a controlled component
        // its value is controlled by React state (the title state variable)
        // This allows us to manage the input's value and reset it after submission.
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 border-2 border-slate-200 rounded-2xl px-4 py-2.5 text-sm font-medium focus:border-blue-400 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-2xl hover:bg-blue-600 flex items-center gap-1 transition-colors"
      >
        <span className="text-base leading-none">+</span>
        Add
      </button>
    </form>
  );
}
//callback (title:string")- required for useState and the onSubmit/onChange evet handlers
