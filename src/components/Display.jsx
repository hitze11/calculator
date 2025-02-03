
import React from "react";

const Display = ({ input }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={input}
        readOnly
        className="w-full text-right text-3xl p-6 bg-blue-900 text-white rounded-lg"
      />
    </div>
  );
};

export default Display;
