import { useState } from "react";

function Button({
  name,
  color,
  onClick,
  children,
}: {
  name: string;
  color?: string;
  onClick?: Function;
  children?: any;
}) {
  let color400,
    color600 = "";
  if (color && color === "red") {
    color400 = "bg-red-400";
    color600 = "active:bg-red-600";
  } else if (color && color === "green") {
    color400 = "bg-green-400";
    color600 = "active:bg-green-600";
  } else if (color && color === "black") {
    color400 = "bg-black";
    color600 = "active:bg-gray-600";
  }
  const colorClasses = color
    ? `${color400} ${color600}`
    : "bg-blue-400 active:bg-blue-600";
  return (
    <button
      className={`
        text-white font-bold uppercase text-sm px-6 py-3
        rounded outline-none focus:outline-none mr-1 mb-1 ease-linear
        transition-all duration-150 shadow hover:shadow-2xl
        ${colorClasses}
      `}
      type="button"
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        }
      }}
    >
      <div className="flex flex-row justify-center">
        {children}
        {name}
      </div>
    </button>
  );
}

export default Button;
