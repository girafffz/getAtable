import React, { useRef } from "react";

const Search = () => {
  const inputRef = useRef();
  return (
    <div className="container mx-auto bg-white px-24 py-6">
      <form>
        <input
          ref={inputRef}
          type="text"
          className="form-control border rounded-lg border-gray-300 w-full p-3"
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Search;
