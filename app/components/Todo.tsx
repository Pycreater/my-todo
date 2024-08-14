"use client";

import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import Loading from "./Loading";

interface ITodo {
  _id: string;
  title: string;
  description?: string;
  completed?: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/todos");
        if (response.status === 200) {
          setTodos(response.data.data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data.message);
        } else {
          console.error("Failed to fetch todos:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/todos/${id}`);

      if (response.status === 200) {
        setTodos(todos.filter((todo) => todo._id !== id));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
      } else {
        console.error("Failed to delete todo:", error);
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="bg-slate-400 w-[70%] rounded-xl flex justify-between p-2 shadow-2xl items-center hover:bg-slate-300"
        >
          <div className="p-3 ml-2 ">
            <h1 className="font-bold text-2xl">{todo.title}</h1>
            <p className="text-sm">{todo.description}</p>
          </div>

          <div className="flex gap-4 mr-2 text-gray-700 cursor-pointer">
            <div
              onClick={() => handleDelete(todo._id)}
              className="text-red-600"
            >
              <RiDeleteBin5Line size={"22px"} />
            </div>
            <Link href={`/update?id=${todo._id}`}>
              <FaEdit size={"22px"} className="text-blue-600" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
