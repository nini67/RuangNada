"use client";

import { useState } from "react";

export default function Home() {
  const [dashboard, setDashboard] = useState(false);
  const [tentang, setTentang] = useState(false);
  const [statistik, setStatistik] = useState(false);
  const [pengaturan, setPengaturan] = useState(false);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">
        🎵 Study With Music
      </h1>

      <div className="space-y-4">
        {/* Dashboard */}
        <div>
          <button
            onClick={() => setDashboard(!dashboard)}
            className="font-semibold"
          >
            {dashboard ? "▼" : "▶"} Dashboard
          </button>

          {dashboard && (
            <ul className="ml-6 mt-2 space-y-1">
              <li>Pomodoro Timer</li>
              <li>Music Player</li>
              <li>To-Do List</li>
              <li>Quote of The Day</li>
            </ul>
          )}
        </div>

        {/* Tentang */}
        <div>
          <button
            onClick={() => setTentang(!tentang)}
            className="font-semibold"
          >
            {tentang ? "▼" : "▶"} Tentang
          </button>

          {tentang && (
            <ul className="ml-6 mt-2 space-y-1">
              <li>Sains</li>
              <li>Manfaat</li>
              <li>Rekomendasi</li>
            </ul>
          )}
        </div>

        {/* Statistik */}
        <div>
          <button
            onClick={() => setStatistik(!statistik)}
            className="font-semibold"
          >
            {statistik ? "▼" : "▶"} Statistik
          </button>

          {statistik && (
            <ul className="ml-6 mt-2 space-y-1">
              <li>Grafik</li>
              <li>Daftar</li>
            </ul>
          )}
        </div>

        {/* Pengaturan */}
        <div>
          <button
            onClick={() => setPengaturan(!pengaturan)}
            className="font-semibold"
          >
            {pengaturan ? "▼" : "▶"} Pengaturan
          </button>

          {pengaturan && (
            <ul className="ml-6 mt-2 space-y-1">
              <li>Durasi</li>
              <li>Tema</li>
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}