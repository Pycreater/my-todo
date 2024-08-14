import React from "react";

const Input = () => {
  return (
    <div className="w-[70%] rounded-xl flex-col justify-between p-2 shadow-2xl items-center">
      <div className="w-full  bg-slate-200 rounded-xl">
        <input
          type="text"
          className="bg-transparent w-full rounded-full outline-none p-3 "
          placeholder="Todo Title"
        />
      </div>
      <div className="w-full mt-3  bg-slate-200 rounded-xl">
        <textarea
          className="bg-transparent w-full rounded-full outline-none p-3 "
          placeholder="Todo Description"
        />
      </div>

      <div
        className="mt-4
      text-center"
      >
        <button className="hover:bg-slate-300 bg-slate-200 p-2 rounded-xl text-xl text-gray-700">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default Input;
