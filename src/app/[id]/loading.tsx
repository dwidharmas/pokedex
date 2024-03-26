export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="container bg-white m-auto h-[500px] p-4 rounded-xl border border-red-100 animate-pulse">
      <div className="w-full h-8 bg-red-100 rounded mb-2"></div>
      <main className="grid grid-cols-2 space-x-4">
        <div className="w-full h-[400px] bg-red-100 rounded mb-2"></div>
        <div className="flex flex-col">
          <div className="w-full h-8 bg-red-100 rounded mb-2"></div>
          <div className="w-full flex-grow bg-red-100 rounded mb-2"></div>
        </div>
      </main>
    </div>
  )
}