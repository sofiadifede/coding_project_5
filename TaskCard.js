//Task Card
//this component represents a single task card in the task list
//'use client' required because this component uses props and interactivity, which are client-side features
'use client';

export default function TaskCard({ id, title, done, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm mb-2">
      <span 
      className={
        done 
        ? "text-slate-400 line-through font semibold text-base" 
        : "text-slate-800 font semibold text-base"
        }
        >
        {title}
      </span>

      <div className="flex items-center gap-2">
        {done && (
          <span className="bg-pink-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
            Done
          </span>
//onToggle is owned by the TaskBoard component, but is passed down to the TaskCard component as a prop, allowing the TaskCard to call the onToggle function when the user clicks the toggle button

        )}        
        <button
          onClick={() => onToggle(id)}
          className="text-sm font-bold px-3 py-1.5 border-2 border-purple-200 text-purple-500 rounded-full hover:bg-blue-50 transition-colors"

        >
          Toggle
        </button>
        <button
    
//onDelete is owned by the TaskBoard component, but is passed down to the TaskCard component as a prop, allowing the TaskCard to call the onDelete function when the user clicks the delete button
//'id' is bound and the callback fires only when clicked
          onClick={() => onDelete(id)}
          className="text-sm font-bold px-3 py-1.5 border-2 border-blue-200 rounded-full text-blue-500 hover:bg-red-50 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}