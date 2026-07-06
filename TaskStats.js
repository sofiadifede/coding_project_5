//Task Stats
//displays the total number of tasks, the number of active tasks, and the number of completed tasks. It also includes a button to clear all completed tasks.
//'use client' is required because this component uses props and interactivity, which are client-side features
//onClearCompleted is a callback function that is passed down from the TaskBoard component, allowing the TaskStats component to trigger the clearing of completed tasks when the button is clicked
'use client';

export default function TaskStats({ total, completed, active, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between bg-slate-50 rounded-2xl px-4 py-3 mb-5">
      <div className="flex gap-4 text-sm font-bold">
       <span className="text-slate-700">{total} total</span>
        <span className="text-purple-500">{active} active</span>
        <span className="text-pink-500">{completed} completed</span>
      </div> 
      <button
        onClick={onClearCompleted}
        disabled={completed === 0}
        className="text-sm font-bold px-3 py-1.5 rounded-full text-red-500 hover:bg-red-100 transition-colors disabled:text-slate-300 disabled:hover:bg-transparent disabled:cursor-not-allowed"
      >
        Clear completed
      </button>
    </div>
  );
}