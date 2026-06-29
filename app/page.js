"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import Music from "./components/Music";
import ToDo from "./components/ToDo";
import Pomodoro from "./components/Pomodoro";
import playlist  from "./data/playlist";

export default function Home() {
    const [menu, setMenu] = useState("welcome");
    const [time, setTime] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [song, setSong] = useState(playlist[0]);
    console.log(playlist);
    console.log(song);
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
                    <Welcome />
                )}

{menu === "pomodoro" && (
    <Pomodoro
        minutes={minutes}
        seconds={seconds}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        hasStarted={hasStarted}
        setHasStarted={setHasStarted}
        setTime={setTime}
    />
)}

{menu === "music" && (
    <Music
        song={song}
        setSong={setSong}
    />
)}

{menu === "to-do" && (
    <ToDo
        tasks={tasks}
        setTasks={setTasks}
        newTask={newTask}
        setNewTask={setNewTask} 
    />
)}

            </section>
        </div>
    </main>
  );
}