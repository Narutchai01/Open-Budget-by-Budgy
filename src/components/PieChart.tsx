import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { strut } from '@/interface/GridpropInterface';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
	titleChart: string;
	dataChart: any;
	classname?: string;
}

const PieChart: React.FC<PieChartProps> = ({ titleChart, dataChart, classname }: PieChartProps) => {
	const label = dataChart?.map((item: strut) => item.title);
	const datas = dataChart?.map((item: strut) => item.value);

	const data = {
		labels: label,
		datasets: [
			{
				label: titleChart,
				data: datas,
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)',
					'rgb(75, 192, 192)',
					'rgb(153, 102, 255)',
					'rgb(255, 159, 64)',
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)',
				],
				hoverOffset: 4,
			},
		],
	};

	return (
		<>
			<div className={classname}>
				<Pie data={data} />
				{/* {dataChart?.length > 1 ? (
				) : dataChart && dataChart.length > 0 ? (
					<div className="text-white flex justify-end text-center w-full h-full flex-col">
						<h1 className="text-2xl">{dataChart[0].title}</h1>
						{/* <h1 className="text-3xl">{dataChart[0].value}</h1> */}
				{/* </div> */}
			</div>
		</>
	);
};

export default PieChart;
