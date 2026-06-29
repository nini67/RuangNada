export default function Music ({
    song,
    setSong,
}) {
    return (
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
    );
}