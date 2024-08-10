import React from 'react';

function AdminPanel() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', trips: 3 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', trips: 5 },
    // Add more users as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-8">Admin Panel</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">User Management</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b-2 p-2">Name</th>
              <th className="border-b-2 p-2">Email</th>
              <th className="border-b-2 p-2">Trips</th>
              <th className="border-b-2 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border-b p-2">{user.name}</td>
                <td className="border-b p-2">{user.email}</td>
                <td className="border-b p-2">{user.trips}</td>
                <td className="border-b p-2">
                  <button className="text-blue-500 hover:underline">Edit</button> | 
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;