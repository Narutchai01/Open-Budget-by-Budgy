"use client";
import React from "react";
import SearchBox from "./SearchBox";
import { useState, createContext } from "react";
// import GridProp from "@/components/GridProp";
import PieChart from "@/components/PieChart";
import { Resualt } from "@/interface/GridpropInterface";

export const SearchContext = createContext<any>({});

import { cn } from "@/lib/utils";
// import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento";

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

            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
              <BentoGridItem
                title="หมวดหมู่งบรายจ่าย"
                description="รายละเอียดของงบประมาณที่ใช้ในการจ่าย"
                header={
                  <PieChart
                    titleChart="หมวดหมู่งบรายจ่าย"
                    dataChart={searchResult?.categories}
                  />
                }
                className={cn("[&>p:text-lg]", "md:col-span-1")}
              />
              <BentoGridItem
                title="แผนยุทธศาสตร์"
                description="รายละเอียดของงบประมาณที่ใช้ในการจ่าย"
                header={
                  <PieChart
                    titleChart="หมวดหมู่งบรายจ่าย"
                    dataChart={searchResult?.strategies}
                  />
                }
                className={cn("[&>p:text-lg]", "md:col-span-2")}
              />
              <BentoGridItem
                title="แผนยุทธศาสตร์"
                description="รายละเอียดของงบประมาณที่ใช้ในการจ่าย"
                header={
                  <PieChart
                    titleChart="หมวดหมู่งบรายจ่าย"
                    dataChart={searchResult?.ministry}
                  />
                }
                className={cn("[&>p:text-lg]", "md:col-span-2")}
              />
              <BentoGridItem
                title="แผนยุทธศาสตร์"
                description="รายละเอียดของงบประมาณที่ใช้ในการจ่าย"
                header={
                  <PieChart
                    titleChart="หมวดหมู่งบรายจ่าย"
                    dataChart={searchResult?.ministry}
                  />
                }
                className={cn("[&>p:text-lg]", "md:col-span-1")}
              />
            </BentoGrid>
          </div>
        )}
      </SearchContext.Provider>
    </>
  );
};

export default HomePage;
