export default function Podomoro ({
    minutes,
    seconds,
    isRunning,
    setIsRunning,
    hasStarted,
    setHasStarted,
    setTime,
}) {
    return (
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
    );
}