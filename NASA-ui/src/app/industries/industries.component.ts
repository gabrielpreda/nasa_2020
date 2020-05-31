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

	public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChartOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: false
		},
	};

	public lineChartColors: Color[] = [
		{
			borderColor: 'rgba(255,183,1,1)',
			backgroundColor: 'rgba(255,183,1,0)',
		},
		{
			borderColor: '#023047',
			backgroundColor: 'rgba(255,183,1,0)',
		},
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
