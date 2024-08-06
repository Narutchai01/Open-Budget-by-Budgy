"use client";
import React from "react";
import SearchBox from "./SearchBox";
import { useState, createContext } from "react";
// import GridProp from "@/components/GridProp";
import PieChart from "@/components/PieChart";
import { Resualt } from "@/interface/GridpropInterface";

export const SearchContext = createContext<any>({});

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  const [searchResult, setSearchResult] = useState<Resualt>();

  const searchContext = {
    search,
    setSearch,
    active,
    setActive,
    searchResult,
    setSearchResult,
  };

  return (
    <>
      <SearchContext.Provider value={searchContext}>
        {active != true ? (
          <div className="flex gap-y-10 flex-col w-full h-full items-center justify-center">
            <h1 className="w-full flex justify-center text-4xl font-bold text-white">
              งบประมาณง่าย ๆ คล้าย ๆ เบนโตะ
            </h1>
            <SearchBox />
          </div>
        ) : (
          <div>
            <div className="flex gap-y-10 flex-col w-full items-center justify-center pt-10">
              <h1 className="w-full flex justify-center text-4xl font-bold text-white">
                งบประมาณง่าย ๆ คล้าย ๆ เบนโตะ
              </h1>
              <SearchBox />
            </div>
            <div className="flex">
              <div className=" w-5/12">
                <PieChart
                  titleChart="หมวดหมู่งบรายจ่าย"
                  dataChart={searchResult?.categories}
                />
              </div>
              <div className=" w-5/12">
                <PieChart
                  titleChart="หมวดหมู่งบรายจ่าย"
                  dataChart={searchResult?.categories}
                />
              </div>
              <div className=" w-5/12">
                <PieChart
                  titleChart="หมวดหมู่งบรายจ่าย"
                  dataChart={searchResult?.categories}
                />
              </div>
            </div>
          </div>
        )}
      </SearchContext.Provider>
    </>
  );
};

export default HomePage;
