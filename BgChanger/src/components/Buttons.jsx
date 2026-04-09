import React, { useState } from "react";

const Buttons = () => {
  const [color, setColor] = useState("bg-gray-100");

  return (
    <div
      className={`${color} w-full h-screen flex items-center justify-center`}
    >
      <div className="bg-white p-4 rounded-md flex gap-2">
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-full"
          onClick={() => setColor("bg-red-500")}
        >
          Red
        </button>

        <button
          className="bg-green-500 text-white px-6 py-2 rounded-full"
          onClick={() => setColor("bg-green-500")}
        >
          Green
        </button>

        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-full"
          onClick={() => setColor("bg-blue-500")}
        >
          Blue
        </button>

        <button
          className="bg-yellow-500 text-white px-6 py-2 rounded-full"
          onClick={() => setColor("bg-yellow-500")}
        >
          Yellow
        </button>

        <button
          className="bg-pink-500 text-white px-6 py-2 rounded-full"
          onClick={() => setColor("bg-pink-500")}
        >
          Pink
        </button>

        <button
          className="bg-purple-500 text-white px-6 py-2 rounded-full"
          onClick={() => setColor("bg-purple-500")}
        >
          Purple
        </button>
      </div>
    </div>
  );
};

export default Buttons;
