'use client';
import React from 'react';
import SearchBox from './SearchBox';
import { useState, createContext } from 'react';
// import GridProp from "@/components/GridProp";
import PieChart from '@/components/PieChart';
import { Resualt } from '@/interface/GridpropInterface';
import Image from 'next/image';
export const SearchContext = createContext<any>({});

import { cn } from '@/lib/utils';
// import React from "react";
import { BentoGrid, BentoGridItem } from '../components/ui/bento';

const HomePage = () => {
	const [search, setSearch] = useState('');
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
					<div className="flex gap-y-10 flex-col w-full h-full items-center justify-center mb-4">
						<h1 className="w-full flex justify-center text-4xl font-bold text-white">
							งบประมาณง่าย ๆ คล้าย ๆ เบนโตะ
						</h1>
						<SearchBox placeholders={['งบประมาณจังหวัดกรุงเทพ', 'งบทหาร', 'งบกระทรวง']} />
					</div>
				) : (
					<div>
						<div className="flex gap-y-10 flex-col w-full items-center justify-center pt-10 mb-4">
							<h1 className="w-full flex justify-center text-4xl font-bold text-white">
								งบประมาณง่าย ๆ คล้าย ๆ เบนโตะ
							</h1>
							<SearchBox placeholders={['งบประมาณจังหวัดกรุงเทพ', 'งบทหาร', 'งบกระทรวง']} />
						</div>
						{searchResult?.total ? (
							<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[22srem]">
								<BentoGridItem
									title="หมวดหมู่งบรายจ่าย"
									description=""
									header={
										<PieChart
											titleChart="หมวดหมู่งบรายจ่าย"
											dataChart={searchResult.categories}
											classname="h-8/12"
										/>
									}
									className={cn('[&>p:text-lg]', 'md:col-span-1')}
								/>

								<BentoGridItem
									title="แผนยุทธศาสตร์"
									// description="รายละเอียดของงบประมาณที่ใช้ในการจ่าย"
									header={
										<PieChart
											titleChart="หมวดหมู่งบรายจ่าย"
											dataChart={searchResult.strategies}
											classname="h-8/12"
										/>
									}
									className={cn('[&>p:text-lg]', 'md:col-span-1')}
								/>

								<BentoGridItem
									title="กระทรวง"
									// description="รายละเอียดของงบประมาณที่ใช้ในการจ่าย"
									header={
										<PieChart
											titleChart="หมวดหมู่งกระทรวง"
											dataChart={searchResult.ministry}
											classname="h-8/12"
										/>
									}
									className={cn('[&>p:text-lg]', 'md:col-span-1')}
								/>

								<BentoGridItem
									title="งบประมาณทั้งหมด"
									description={
										searchResult.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' บาท'
									}
									// header={}
									className={cn('[&>p:text-lg]', 'md:col-span-1 h-24')}
								/>
								<BentoGridItem
									title="จำนวนโครงการ"
									description={searchResult.total_projects}
									// header={}
									className={cn('[&>p:text-lg]', 'md:col-span-1 h-24')}
								/>
							</BentoGrid>
						) : (
							<div className="flex justify-center text-white">ไม่พบข้อมูล</div>
						)}
					</div>
				)}
			</SearchContext.Provider>
		</>
	);
};

export default HomePage;
