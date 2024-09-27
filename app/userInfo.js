"use client";
import { useState } from "react";

export default function UserInfoForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
// for name email and roll no
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, rollNo });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Info</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
    // NAME
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
            // EMAIL
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
            // ROLLNO
        <input
          type="text"
          placeholder="Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
        <button
          type="submit"
          className="mt-4 py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-200"
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
}
