import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Profile</h1>
        <p className="text-gray-700">Name: {user?.name || 'Guest'}</p>
        <p className="text-gray-700">Email: {user?.email || 'N/A'}</p>
      </div>
    </main>
  );
}

export default Profile;
