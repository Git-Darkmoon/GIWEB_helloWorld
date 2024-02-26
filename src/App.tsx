function App() {
  return (
    <main className="bg-neutral-900 w-screen min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="mb-4 text-3xl font-extrabold  text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          GIWEB
        </span>{" "}
        Hello world.
      </h1>
      <section>
        <article className="max-w-xs lg:max-w-sm bg-white rounded-lg shadow-lg shadow-slate-500/80 hover:shadow-slate-400 hover:scale-105 transition">
          <img className="rounded-t-lg" src="/cardPicture.webp" alt="" />
          <div className="p-5">
            <a href="https://github.com/Git-Darkmoon">
              <h5 className="mb-2 text-2xl font-bold tracking-tight hover:underline text-gray-900 Noteworthy technology acquisitions 2021">
                Nicolas
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
              Primer proyectico para GIWEB React.
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
