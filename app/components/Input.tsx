"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Input = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/todos", {
        title,
        description,
      });

      console.log(response.data);

      if (response.status === 201) {
        setTitle("");
        setDescription("");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
      } else {
        console.error("Failed to create todo:", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[70%] rounded-xl flex-col justify-between p-2 shadow-2xl items-center"
    >
      <div className="w-full  bg-slate-200 rounded-xl">
        <input
          type="text"
          className="bg-transparent w-full rounded-full outline-none p-3 "
          placeholder="Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="w-full mt-3  bg-slate-200 rounded-xl">
        <textarea
          className="bg-transparent w-full rounded-full outline-none p-3 "
          placeholder="Todo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div
        className="mt-4
      text-center"
      >
        <button
          onClick={() => router.push("/")}
          className="hover:bg-slate-300 bg-slate-200 p-2 rounded-xl text-xl text-gray-700"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default Input;
