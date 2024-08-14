"useClient";

import React from "react";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="bg-slate-400 w-[50%] rounded-xl flex justify-between p-2 shadow-2xl items-center">
      <h1 className="font-semibold cursor-pointer">{title}</h1>
      <button className="rounded-xl hover:bg-slate-300 bg-slate-200 p-2">
        Add Todo
      </button>
    </div>
  );
};

export default Header;
