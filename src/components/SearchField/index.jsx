import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchField() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };
  return (
    <form
      className="p-6 border-b-1 border-primary-color flex flex-col lg:px-30 xl:py-10"
      onSubmit={handleSubmit}
    >
      <label
        className="text-primary-color font-bold font-inter lg:text-xl"
        htmlFor="input-search"
      >
        Search for movies, TV or people:
      </label>
      <div className="flex my-4">
        <input
          id="input-search"
          className="w-6/10 p-2 rounded-tl-xl rounded-bl-xl bg-custom-gray placeholder:text-primary-color placeholder:font-medium placeholder:font-montserrat placeholder:text-sm self-center outline-none ring-primary-color focus:ring-[.4px] grow lg:placeholder:text-lg xl:py-4"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
        />
        <button className="bg-primary-color px-2 grow rounded-tr-xl rounded-br-xl text-white cursor-pointer xl:text-xl">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchField;
