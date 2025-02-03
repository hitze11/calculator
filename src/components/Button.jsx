
import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <button
      className=" flex  bg-green-600 text-black font-bold py-5 px-5 rounded-lg hover:bg-yellow-600 active:bg-gray-800 transition duration-200"
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
