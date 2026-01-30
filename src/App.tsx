import './index.css'

function App() {

  return (
    <>
      <div className="bg-green-500 text-white p-4 mt-4 rounded-lg shadow-md">
        <p className="text-lg">User Management System</p>
      </div>
      <div className="bg-red-500 text-white p-4 mt-4 rounded-lg shadow-md">
        <button className="bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-100">Login</button>
      </div>
      <div className="bg-yellow-500 text-black p-4 mt-4 rounded-lg shadow-md">
        <input className="border border-gray-300 p-2 rounded w-full" placeholder="Enter username" />
      </div>
      <div className="bg-purple-500 text-white p-4 mt-4 rounded-lg shadow-md">
        <ul className="list-disc list-inside">
          <li>Manage Users</li>
          <li>View Profiles</li>
          <li>Edit Settings</li>
        </ul>
      </div>
    </>
  )
}

export default App
