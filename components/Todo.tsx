"use client";

import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
  return (
    <div className="bg-slate-400 w-[70%] rounded-xl flex justify-between p-2 shadow-2xl items-center">
      <div className="p-3 ml-2">
        <h1 className="font-bold text-2xl">topic</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          neque sed asperiores suscipit ratione quod autem, deleniti optio
          inventore esse illo incidunt magnam ipsam? Quas cum nam quibusdam
          velit est dicta aperiam, unde asperiores voluptate suscipit! Atque
          veritatis itaque hic modi quam eaque optio repellat sint dolorum eum
          qui sapiente dolore, facere tempora vero? Quo omnis unde autem sunt
          ab.
        </p>
      </div>

      <div className="flex gap-4 mr-2 text-gray-700 cursor-pointer">
        <div className="text-red-600">
          <RiDeleteBin5Line size={"22px"} />
        </div>
        <FaEdit size={"22px"} />
      </div>
    </div>
  );
};

export default Todo;
