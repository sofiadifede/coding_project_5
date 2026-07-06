import TaskBoard from "@/components/TaskBoard";

export default function Home() {
  return (
    <main className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mt-10 px-4">      <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 mb-6 antialiased">
        My Tasks <span className="text-pink-500">✓</span>
      </h1>
      <TaskBoard />
    </main>
  );
}