import { Component, Inject, OnInit } from '@angular/core';
import { IndustriesService } from './industries.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, ThemeService } from 'ng2-charts';
@Component({
	selector: 'app-industries',
	templateUrl: './industries.component.html',
	styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {
	public lineChartData: ChartDataSets[] = [
		{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
		{data: [65, 90, 80, 44, 11, 78, 99], label: 'Series B'},
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
	constructor(public industriesService: IndustriesService, public dialogRef: MatDialogRef<IndustriesComponent>,
				@Inject(MAT_DIALOG_DATA) public data: any) {
	}

	ngOnInit() {
	}

	close(): void {
		this.dialogRef.close();
	}

	getColor(i: number) {
		const step = 255 / this.industriesService.industries.length;
		return `rgb(${120 + (i * (step / 2))}, ${255 - (i * step)}, ${70 - (i * step / 4)})`;
	}
}
