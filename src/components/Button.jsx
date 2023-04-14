import React from "react";

function Button({ className, children }) {
  return (
    <button
      className={`${className} px-6 py-2 rounded duration-500`}
    >
      {children}
    </button>
  );
}

export default Button;
