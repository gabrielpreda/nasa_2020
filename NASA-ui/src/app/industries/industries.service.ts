import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Injectable({
	providedIn: 'root'
})
export class IndustriesService {
	public lineChartData: ChartDataSets[] = [
		{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
		{data: [65, 90, 80, 44, 11, 78, 99], label: 'Series B'},
	];
	industries = [
		{chart1Dataset: undefined, name: 'Aeronautics industries'},
		{chart1Dataset: undefined, name: 'Automotive industry'},
		{chart1Dataset: undefined, name: 'Biotechnology'},
		{chart1Dataset: undefined, name: 'Chemicals'},
		{chart1Dataset: undefined, name: 'Construction'},
		{chart1Dataset: undefined, name: 'Cosmetics'},
		{chart1Dataset: undefined, name: 'Defence industries'},
		{chart1Dataset: undefined, name: 'Electrical and electronic engineering industries'},
		{chart1Dataset: undefined, name: 'Firearms'},
		{chart1Dataset: undefined, name: 'Food and drink industry'},
		{chart1Dataset: undefined, name: 'Gambling'},
		{chart1Dataset: undefined, name: 'Healthcare industries'},
		{chart1Dataset: undefined, name: 'Maritime industries'},
		{chart1Dataset: undefined, name: 'Mechanical engineering'},
		{chart1Dataset: undefined, name: 'Medical devices'},
		{chart1Dataset: undefined, name: 'Postal services'},
		{chart1Dataset: undefined, name: 'Pressure equipment and gas appliances'},
		{chart1Dataset: undefined, name: 'Raw materials, metals, minerals and forest-based industries'},
		{chart1Dataset: undefined, name: 'Social economy'},
		{chart1Dataset: undefined, name: 'Space'},
		{chart1Dataset: undefined, name: 'Textiles, Fashion and creative industries'},
		{chart1Dataset: undefined, name: 'Tourism'},
		{chart1Dataset: undefined, name: 'Toys'}
	];

	constructor() {
		this.industries.forEach(value => {
			let data: ChartDataSets[] = [
				{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
				{data: [65, 90, 80, 44, 11, 78, 99], label: 'Series B'},
			] ;
			data[0].data = Array.from({length: 7}, () => Math.floor(Math.random() * 39));
			data[1].data = Array.from({length: 7}, () => Math.floor(Math.random() * 39));
			value.chart1Dataset =data
		})
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
}
