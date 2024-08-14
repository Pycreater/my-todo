"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const Update = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchTodo = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/todos/${id}`);
          if (response.status === 200) {
            const { title, description } = response.data.data;
            setTitle(title);
            setDescription(description || "");
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error(error.response?.data.message);
          } else {
            console.error("Failed to fetch todo:", error);
          }
        }
      }
    };

    fetchTodo();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/todos/${id}`, {
        title,
        description,
      });

      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
      } else {
        console.error("Failed to update todo:", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="w-[70%] rounded-xl flex-col justify-between p-2 shadow-2xl items-center"
    >
      <div className="w-full bg-slate-200 rounded-xl">
        <input
          type="text"
          className="bg-transparent w-full rounded-full outline-none p-3 "
          placeholder="Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="w-full mt-3 bg-slate-200 rounded-xl">
        <textarea
          className="bg-transparent w-full rounded-full outline-none p-3 "
          placeholder="Todo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mt-4 text-center">
        <button className="hover:bg-slate-300 bg-slate-200 p-2 rounded-xl text-xl text-gray-700">
          Update Todo
        </button>
      </div>
    </form>
  );
};

export default Update;
