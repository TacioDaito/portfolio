function App() {
  return (
    <div className="bg-[#0a0f1e] noise-overlay h-screen w-screen flex items-center justify-center p-4 md:p-12">
      <div className="bg-[#111827] noise-overlay rounded-4xl p-2 md:p-4 w-full max-w-6xl h-full max-h-[80vh]">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          <div className="flex items-center justify-center text-[#f0f4ff] text-2xl font-medium">About Me</div>
          <div className="flex items-center justify-center text-[#f0f4ff] text-2xl font-medium">Portfolio</div>
          <div className="flex items-center justify-center text-[#f0f4ff] text-2xl font-medium">Skills</div>
          <div className="flex items-center justify-center text-[#f0f4ff] text-2xl font-medium">Contact</div>
        </div>
      </div>
    </div>
  )
}

export default App