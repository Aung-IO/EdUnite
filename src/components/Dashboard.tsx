

const Dashboard = () => {
  const user = { name: 'John Doe' }; // Replace with real user data

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, {user.name.split(' ')[0]}!
        </h1>
        <p className="text-gray-500 mt-2">Here’s what’s happening with your account today.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow rounded-2xl p-6 border">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Enrolled Courses</h2>
          <p className="text-2xl font-bold text-blue-600">3</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 border">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Upcoming Events</h2>
          <p className="text-2xl font-bold text-green-600">2</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 border">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Completed Lessons</h2>
          <p className="text-2xl font-bold text-purple-600">12</p>
        </div>
      </section>

      <section className="bg-white border rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <ul className="space-y-3">
          <li>
            <button className="text-blue-600 hover:underline">📚 Browse New Courses</button>
          </li>
          <li>
            <button className="text-blue-600 hover:underline">📝 View Your Schedule</button>
          </li>
          <li>
            <button className="text-blue-600 hover:underline">💬 Connect with a Mentor</button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
