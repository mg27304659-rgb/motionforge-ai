export default function MotionForgeAI() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold tracking-wide text-purple-400">
          MotionForge AI
        </h1>

        <nav className="flex gap-6 text-zinc-300">
          <a href="#features" className="hover:text-purple-400">Features</a>
          <a href="#pricing" className="hover:text-purple-400">Pricing</a>
          <a href="#dashboard" className="hover:text-purple-400">Dashboard</a>
        </nav>
      </header>

      <section className="px-8 py-24 text-center bg-gradient-to-b from-purple-950 to-black">
        <h2 className="text-6xl font-extrabold max-w-5xl mx-auto leading-tight">
          Turn Images Into
          <span className="text-purple-400"> Cinematic AI Videos</span>
        </h2>

        <p className="text-zinc-400 text-xl mt-6 max-w-2xl mx-auto">
          Upload an image and a reference video. MotionForge AI recreates the
          movement, camera motion, and expressions automatically.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg">
            Start Creating
          </button>

          <button className="border border-zinc-700 hover:border-purple-400 px-8 py-4 rounded-2xl text-lg">
            Watch Demo
          </button>
        </div>
      </section>

      <section id="features" className="px-8 py-24">
        <h3 className="text-4xl font-bold text-center mb-16">
          Powerful AI Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: 'Motion Transfer',
              desc: 'Copy movement, poses, and gestures from any video.'
            },
            {
              title: 'Face Lock',
              desc: 'Keep character identity and facial consistency.'
            },
            {
              title: 'Camera Motion',
              desc: 'Cinematic zooms, shakes, pans, and dynamic motion.'
            },
            {
              title: 'Anime Mode',
              desc: 'Generate anime-style cinematic animations.'
            },
            {
              title: 'TikTok Export',
              desc: 'Instant vertical export optimized for social media.'
            },
            {
              title: 'HD Rendering',
              desc: 'Export videos in HD and 4K quality.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition"
            >
              <h4 className="text-2xl font-bold mb-4 text-purple-400">
                {item.title}
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="dashboard"
        className="px-8 py-24 bg-zinc-950 border-y border-zinc-800"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">
            AI Video Dashboard
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-purple-400">
                Upload Files
              </h4>

              <div className="border-2 border-dashed border-zinc-700 rounded-2xl p-10 text-center mb-6">
  <input
    type="file"
    accept="image/*"
    className="w-full"
  />
</div>

              <div className="border-2 border-dashed border-zinc-700 rounded-2xl p-10 text-center">
                <p className="text-zinc-400">
                  Drag & Drop Reference Video
                </p>
              </div>
            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-purple-400">
                Motion Controls
              </h4>

              <div className="space-y-6">
                <div>
                  <label className="text-zinc-400 block mb-2">
                    Motion Strength
                  </label>
                  <input type="range" className="w-full" />
                </div>

                <div>
                  <label className="text-zinc-400 block mb-2">
                    Camera Motion
                  </label>
                  <select className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3">
                    <option>Cinematic</option>
                    <option>Anime</option>
                    <option>Dynamic</option>
                    <option>Realistic</option>
                  </select>
                </div>

                <div>
                  <label className="text-zinc-400 block mb-2">
                    Prompt
                  </label>

                  <textarea
                   rows={5}
                    placeholder="Describe your video style..."
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                  />
                </div>
<input
  type="file"
  accept="image/*"
<input type="file" />

<input
  type="file"
  accept="video/*"
  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-4"
/>
                <button className="w-full bg-purple-500 hover:bg-purple-600 py-4 rounded-2xl font-bold text-lg">
                  Generate AI Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-8 py-24">
        <h3 className="text-4xl font-bold text-center mb-16">
          Pricing Plans
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Free',
              price: '$0',
              features: ['3 videos/day', '720p export', 'Watermark']
            },
            {
              name: 'Pro',
              price: '$15/mo',
              features: ['Unlimited videos', 'HD export', 'No watermark']
            },
            {
              name: 'Creator',
              price: '$29/mo',
              features: ['4K export', 'Fast rendering', 'API access']
            }
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-purple-500 transition"
            >
              <h4 className="text-3xl font-bold text-purple-400 mb-4">
                {plan.name}
              </h4>

              <p className="text-5xl font-extrabold mb-8">
                {plan.price}
              </p>

              <div className="space-y-4 mb-10 text-zinc-400">
                {plan.features.map((feature, i) => (
                  <p key={i}>{feature}</p>
                ))}
              </div>

              <button className="w-full bg-purple-500 hover:bg-purple-600 py-4 rounded-2xl font-semibold">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-8 py-8 text-center text-zinc-500">
        © 2026 MotionForge AI — Powered by Artificial Intelligence
      </footer>
    </div>
  )
}
