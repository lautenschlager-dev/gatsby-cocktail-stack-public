import React from "react"

const SeachInput = ({ placeholder, ...rest }) => {
  return (
    <div
      className="flex flex-auto items-center bg-gray-200 rounded-full pl-4 text-gray-700"
      id="search"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-gray-400 h-4 w-4"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      <input
        className="border-none bg-transparent p-4 w-full h-full outline-none"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}

export default SeachInput
