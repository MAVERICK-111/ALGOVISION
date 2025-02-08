import React from "react";
import Controls from "./controls";

const Sidebar = ({ show }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-transform transform ${
        show ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="p-4 pt-20">
        <Controls />
      </div>
    </div>
  );
};
export default Sidebar;