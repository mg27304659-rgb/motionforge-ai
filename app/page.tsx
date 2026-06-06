export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          MotionForge AI
        </h1>

        <div className="bg-zinc-900 p-8 rounded-2xl space-y-6">
          <h2 className="text-2xl font-bold">
            Upload Files
          </h2>

          <div>
            <label className="block mb-2">
              Character Image
            </label>

            <input
              type="file"
              accept="image/*"
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-2">
              Reference Video
            </label>

            <input
              type="file"
              accept="video/*"
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-2">
              Prompt
            </label>

            <textarea
              rows={5}
              placeholder="Describe your video..."
              className="w-full border p-3 rounded text-black"
            />
          </div>

          <button className="w-full bg-purple-600 p-4 rounded-xl font-bold">
            Generate AI Video
          </button>
        </div>
      </div>
    </main>
  );
}
