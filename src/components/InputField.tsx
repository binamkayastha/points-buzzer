import React from "react";

function InputField({
  name,
  onChange,
}: {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-row items-center">
      <span className="w-1/3 text-lg font-bold">{name}</span>
      <input
        type="text"
        onChange={onChange}
        placeholder={name}
        className="max-w-lg px-3 py-4 placeholder-blueGray-700 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />
    </div>
  );
}

export default InputField;
