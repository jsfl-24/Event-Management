export default function CodingEventPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Coding Event</h1>
      <p className="mb-6">Show off your programming skills in this exciting challenge!</p>

      <form className="space-y-4 bg-white p-6 rounded-xl shadow-md max-w-md">
        <div>
          <label className="block mb-1">Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1">College</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  );
}
