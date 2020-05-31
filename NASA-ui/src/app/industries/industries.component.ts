import { Component, Inject, OnInit } from '@angular/core';
import { IndustriesService } from './industries.service';
// @ts-ignore
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, ThemeService } from 'ng2-charts';
@Component({
	selector: 'app-industries',
	templateUrl: './industries.component.html',
	styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

	public lineChartLabelsSO2CMASS: Label[] = ['2019 11', '2019 12', '2020 01', '2020 02', '2020 03', '2020 04'];
	public lineChartLabelsCO2: Label[] = ['2019 01',
		'2019 02',
		'2019 03',
		'2019 04',
		'2019 05',
		'2019 06',
		'2019 07',
		'2019 08',
		'2019 09',
		'2019 10',
		'2019 11',
		'2019 12',
		'2020 01',
		'2020 02',
		'2020 03',
		'2020 04'
	];
	public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChartOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: false
		},
	};

	public lineChartColors: Color[] = [
		{ // grey
			backgroundColor: 'rgba(148,159,177,0.2)',
			borderColor: 'rgba(148,159,177,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{ // dark grey
			backgroundColor: 'rgba(77,83,96,0.2)',
			borderColor: 'rgba(77,83,96,1)',
			pointBackgroundColor: 'rgba(77,83,96,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(77,83,96,1)'
		},
		{ // red
			backgroundColor: 'rgba(255,0,0,0.3)',
			borderColor: 'red',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}
	];
	public lineChartLegend = true;
	public lineChartType = 'line';
	public lineChartPlugins = [];
	private selectedIndustry: any;
	constructor(public industriesService: IndustriesService, public dialogRef: MatDialogRef<IndustriesComponent>,
				@Inject(MAT_DIALOG_DATA) public data: any) {
	}

	ngOnInit() {
		console.log(this.data);
		this.selectedIndustry = this.industriesService.industries[0];
	}

	close(): void {
		this.dialogRef.close();
	}

	getColor(i: number) {
		const step = 255 / this.industriesService.industries.length;
		return `rgb(${120 + (i * (step / 2))}, ${255 - (i * step)}, ${70 - (i * step / 4)})`;
	}

	selectIndustry(industry: any) {
		console.log(industry)
		this.selectedIndustry = industry;
	}
}
