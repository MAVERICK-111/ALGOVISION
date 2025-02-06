import React from "react";
import Controls from "./controls";

const Sidebar = ({ show }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-transform transform ${
        show ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:relative md:block md:w-64 md:h-auto md:bg-white md:text-black md:border-r md:border-gray-200`}
    >
      <div className="p-4 pt-20">
        <Controls />
      </div>
    </div>
  );
};
export default Sidebar;