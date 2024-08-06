import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { strut } from '@/interface/GridpropInterface';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
	titleChart: string;
	dataChart: any;
}

const PieChart: React.FC<PieChartProps> = ({ titleChart, dataChart }: PieChartProps) => {
	const label = dataChart?.map((item: strut) => item.title);
	const datas = dataChart?.map((item: strut) => item.value);

	const data = {
		labels: label,
		datasets: [
			{
				label: titleChart,
				data: datas,
				backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
				hoverOffset: 4,
			},
		],
	};

	return (
		<>
			<div className="w-1/2 h-1/2">
				{dataChart?.length > 1 ? (
					<Pie data={data} />
				) : dataChart && dataChart.length > 0 ? (
					<div>
						<h1>{dataChart[0].title}</h1>
						<h1>{dataChart[0].value}</h1>
					</div>
				) : null}
			</div>
		</>
	);
};

export default PieChart;
