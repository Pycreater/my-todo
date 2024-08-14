"use client";

import { useRouter } from "next/navigation";

const Header = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <div className="bg-transparent w-[50%] rounded-xl flex justify-between p-2 shadow-2xl items-center">
      <h1 className="font-semibold cursor-pointer text-2xl p-2">{title}</h1>
      <button
        className="rounded-xl shadow-md hover:bg-slate-300 bg-slate-200 p-2"
        onClick={() => router.push("/addTodo")}
      >
        Add Todo
      </button>
    </div>
  );
};

export default Header;
