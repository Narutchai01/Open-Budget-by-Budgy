import React from "react";
import { useContext } from "react";
import { SearchContext } from "./HomePage";
import { axiosInstance } from "@/lib/axiosInstance";

const SearchBox = () => {
  useContext(SearchContext);
  const { search, setSearch, setActive, setSearchResult } =
    useContext(SearchContext);
  const handleOnChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    await setActive(true);
    if (search === "") {
      return;
    }
    await axiosInstance.get(`/bento?query=${search}`).then((res) => {
      setSearchResult(res.data);
    });
  };

  return (
    <>
      <label className="flex gap-x-6 w-4/5 rounded-3xl border-2 border-gray-400 px-10 py-2 bg-white">
        <input
          type="text"
          className="w-full h-full border-none outline-none bg-none items-center"
          placeholder="ค้นหา"
          onChange={handleOnChange}
        />
        <button
          onClick={handleSearch}
          className=" bg-newC px-4 py-2 rounded-xl"
        >
          <h1 className=" font-semibold ">ค้นหา</h1>
        </button>
      </label>
    </>
  );
};

export default SearchBox;
