import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center m-8">
      <div className="w-16 h-16 border-4 border-t-transparent border-[#88304E] rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;