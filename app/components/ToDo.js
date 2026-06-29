export default function ToDo({
    tasks,
    setTasks,
    newTask,
    setNewTask,
}) {
    return (
        <div className="w-full max-w-5xl mx-10">

        <div className="bg-white shadow-md rounded-xl p-6 mb-6">
            <h1 className="text-3xl font-bold text-center">
                📝 To-Do List
            </h1>
        </div>

        <div className="bg-white shadow-md rounded-xl p-8">

            <div className="flex gap-3">

                <input
                    type="text"
                    placeholder="Tambahkan tugas..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="flex-1 border rounded-lg px-4 py-2"
                />

                <button
                    onClick={() => {
                        if (newTask.trim() === "") return;

                        setTasks([
                            ...tasks,
                            {
                                text: newTask,
                                done: false,
                            },
                        ]);

                        setNewTask("");
                    }}
                    className="bg-indigo-600 text-white px-5 rounded-lg"
                >
                    Tambah
                </button>

            </div>

            <div className="mt-8 space-y-3">

                {tasks.map((task, index) => (

                    <div
                        key={index}
                        className="flex justify-between items-center border rounded-lg p-4"
                    >
                        <span
                            className={
                                task.done
                                    ? "line-through text-gray-400"
                                    : ""
                            }
                        >
                            {task.text}
                        </span>

                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    const updated = [...tasks];
                                    updated[index].done = !updated[index].done;
                                    setTasks(updated);
                                }}
                                className="text-green-600 text-xl"
                            >
                                {task.done ? "✅" : "☑️"}
                            </button>

                            <button
                                onClick={() => {
                                    const updated = tasks.filter((_, i) => i !== index);
                                    setTasks(updated);
                                }}
                                className="text-red-500 text-xl hover:scale-110 transition"
                            >
                                🗑️
                            </button>
                        </div>
                    </div>

                ))}

            </div>

        </div>

        </div>
    );
}