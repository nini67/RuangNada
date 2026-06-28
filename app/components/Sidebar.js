"use client";

import { useState } from "react";
import {
    ChevronRight,
    ChevronDown,
    LayoutDashboard,
    Info,
    ChartColumn,
    Settings,
} from "lucide-react";

export default function Sidebar({ setMenu }) {
  const [dashboard, setDashboard] = useState(true);
  const [tentang, setTentang] = useState(false);
  const [statistik, setStatistik] = useState(false);
  const [pengaturan, setPengaturan] = useState(false);

  return (
    <aside className="w-72 bg-white shadow-lg p-6 min-h-screen">
      
      {/* Dashboard */}
      <button
        onClick={() => setDashboard(!dashboard)}
        className="w-full rounded-lg px-3 py-2 text-left font-semibold hover:bg-indigo-300 transition"
      >
        <div className="flex items-center gap-2">
            {dashboard ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
        </div>
      </button>

      {dashboard && (
        <ul className="ml-8 mt-2 space-y-2">
          <li 
            onClick={() => setMenu("pomodoro")}
            className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
          >Pomodoro Timer</li>
          <li
            onClick={() => setMenu("music")}
            className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
          >Music Player</li>
          <li
            onClick={() => setMenu("to-do")}
            className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
          >To-Do List</li>
          <li
            onClick={() => setMenu("quote")}
            className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
          >Quote of The Day</li>
        </ul>
      )}

      {/* Tentang */}
      <button
        onClick={() => setTentang(!tentang)}
        className="mt-4 w-full rounded-lg px-3 py-2 text-left font-semibold hover:bg-indigo-300 transition"
      >
        <div className="flex items-center gap-2">
            {tentang ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            <Info size={18} />
            <span>Tentang</span>
        </div>
      </button>

      {tentang && (
        <ul className="ml-8 mt-2 space-y-2">
          <li
            onClick={() => setMenu("sains")}
            className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
          >Sains</li>
          <li 
            onClick={() => setMenu("manfaat")}
            className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
          >Manfaat</li>
          <li
            onClick={() => setMenu("rekomendasi")}
            className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
          >Rekomendasi</li>
        </ul>
      )}

      {/* Statistik */}
      <button
        onClick={() => setStatistik(!statistik)}
        className="mt-4 w-full rounded-lg px-3 py-2 text-left font-semibold hover:bg-indigo-300 transition"
      >
        <div className="flex items-center gap-2">
            {statistik ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            <ChartColumn size={18} />
            <span>Statistik</span>
        </div>
      </button>

      {statistik && (
        <ul className="ml-8 mt-2 space-y-2">
          <li
            onClick={() => setMenu("grafik")}
            className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
          >Grafik</li>
          <li
            onClick={() => setMenu("daftar")}
            className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
          >Daftar</li>
        </ul>
      )}

      {/* Pengaturan */}
      <button
        onClick={() => setPengaturan(!pengaturan)}
        className="mt-4 w-full rounded-lg px-3 py-2 text-left font-semibold hover:bg-indigo-300 transition"
      >
        <div className="flex items-center gap-2">
            {pengaturan ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            <Settings size={18} />
            <span>Pengaturan</span>
        </div>
      </button>

      {pengaturan && (
        <ul className="ml-8 mt-2 space-y-2">
          <li
            onClick={() => setMenu("durasi")}
            className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
          >Durasi</li>
          <li
            onClick={() => setMenu("tema")}
            className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-200"
          >Tema</li>
        </ul>
      )}
    </aside>
  );
}