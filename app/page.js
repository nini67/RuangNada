"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";

export default function Home() {
    const [menu, setMenu] = useState("welcome");
    const [time, setTime] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [song, setSong] = useState({
        title: "Piano",
        file: "/music/Piano BGM.mp3",
    });
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        let interval;
        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
        }
        if (time === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");

  return (
    <main className="min-h-screen bg-gray-100">
        
        {/* Header */}
        <header className="bg-blue-950 text-white py-5 pl-10 text-3xl font-bold">
            RUANG NADA
        </header>

        {/* isi */}
        <div className="flex">

         <Sidebar setMenu={setMenu} />

            <section className="flex-1 flex items-center justify-center">

                {menu === "welcome" && (
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">
                            👋 Selamat Datang
                        </h1>

                        <p className="mt-4 text-gray-600">
                            Selamat datang di RuangNada.
                        </p>

                        <p className="text-gray-600">
                            Pilih menu di sebelah kiri untuk memulai.
                        </p>
                    </div>
                )}

{menu === "pomodoro" && (
    <div className="w-full max-w-5xl mx-10">

        {/* ================= JUDUL (SENDIRI) ================= */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-6">
            <h1 className="text-3xl font-bold text-center">
                ⏱ Pomodoro Timer
            </h1>
        </div>

        {/* ================= TIMER ================= */}
        <div className="bg-white shadow-md rounded-xl p-10 text-center">

            <p className="text-gray-500">
                Fokus selama 25 menit tanpa gangguan
            </p>

            <h2 className="text-6xl mt-8 font-bold">
                {minutes}:{seconds}
            </h2>

            <div className="mt-8 flex justify-center gap-4">

                <button
                    onClick={() => {
                        setIsRunning(!isRunning);
                        setHasStarted(true);
                    }}
                    className={`text-white px-5 py-2 rounded-lg transition ${
                        isRunning
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-indigo-500 hover:bg-indigo-600"
                    }`}
                >
                    {isRunning ? "Pause" : "Start"}
                </button>

                {hasStarted && (
                    <button
                        onClick={() => {
                            setTime(25 * 60);
                            setIsRunning(false);
                            setHasStarted(false);
                        }}
                        className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg transition"
                    >
                        Reset
                    </button>
                )}

            </div>

        </div>

        {/* ================= 3 CARD BAWAH ================= */}
        <div className="mt-6 grid grid-cols-3 gap-4">

            <div className="rounded-xl bg-white shadow-md p-4">
                <p className="text-2xl">🍅</p>
                <h3 className="font-bold text-lg">0</h3>
                <p className="text-sm text-gray-500">Sesi</p>
            </div>

            <div className="rounded-xl bg-white shadow-md p-4">
                <p className="text-2xl">☕</p>
                <h3 className="font-bold text-lg">5 Menit</h3>
                <p className="text-sm text-gray-500">Break</p>
            </div>

            <div className="rounded-xl bg-white shadow-md p-4">
                <p className="text-2xl">🎯</p>
                <h3 className="font-bold text-lg">8</h3>
                <p className="text-sm text-gray-500">Target</p>
            </div>

        </div>

    </div>
)}

{menu === "music" && (
    <div className="w-full max-w-5xl mx-10">

        <div className="bg-white shadow-md rounded-xl p-6 mb-6">
            <h1 className="text-3xl font-bold text-center">
                🎵 Music Player
            </h1>
        </div>

        <div className="bg-white shadow-md rounded-xl p-10 text-center">

            <p className="text-gray-500">
                Dengarkan musik agar belajar lebih fokus.
            </p>

            <div className="mt-10 text-6xl">
                🎧
            </div>

            <h2 className="mt-6 text-2xl font-bold">
                {song.title}
            </h2>

            <audio
                className="w-full mt-6"
                controls
                src={song.file}
            />

            <p className="text-gray-500 mt-2">
                Pilih musik untuk menemani belajarmu.
            </p>

            <div className="mt-8 flex justify-center gap-6">

                <button className="bg-gray-200 px-4 py-2 rounded-lg">
                    ⏮
                </button>

                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">
                    ▶
                </button>

                <button className="bg-gray-200 px-4 py-2 rounded-lg">
                    ⏭
                </button>
            </div>

            <div className="mt-10">
                <h3 className="font-semibold mb-3">
                    Playlist
                </h3>

                <div className="space-y-3">

                <button
                    onClick={() => 
                        setSong({
                            title: "Piano",
                            file: "/music/Piano BGM.mp3",
                        })
                    }
                    className={`w-full border rounded-lg p-3 text-left transition ${
                        song.title === "Piano"
                            ? "bg-indigo-100 border-indigo-500"
                            : "hover:bg-gray-100"
                    }`}                
                >
                    🎵 Piano
                    {song.title === "Piano" && (
                        <span className="float-right text-indigo-600 font-semibold">
                            ✓ Sedang diputar
                        </span>
                    )}
                </button>

                <button
                    onClick={() => 
                        setSong({
                            title: "Rain Sounds",
                            file: "/music/Rain.mp3",
                        })
                    }
                    className={`w-full border rounded-lg p-3 text-left transition ${
                        song.title === "Rain Sounds"
                            ? "bg-indigo-100 border-indigo-500"
                            : "hover:bg-gray-100"
                    }`}
                >
                    🌧 Rain Sounds
                    {song.title === "Rain Sounds" && (
                        <span className="float-right text-indigo-600 font-semibold">
                            ✓ Sedang diputar
                        </span>
                    )}
                </button>

                <button
                    onClick={() => 
                        setSong({
                            title: "Coffee Shop",
                            file: "/music/Coffee Shop.mp3",
                        })
                    }
                    className={`w-full border rounded-lg p-3 text-left transition ${
                        song.title === "Coffee Shop"
                            ? "bg-indigo-100 border-indigo-500"
                            : "hover:bg-gray-100"
                    }`}
                >
                    ☕ Coffee Shop
                    {song.title === "Coffee Shop" && (
                        <span className="float-right text-indigo-600 font-semibold">
                            ✓ Sedang diputar
                        </span>
                    )}
                </button>

                </div>
            </div>
        </div>
    </div>
)}

{menu === "to-do" && (
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
)}

            </section>
        </div>
    </main>
  );
}