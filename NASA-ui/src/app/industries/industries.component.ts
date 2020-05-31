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
	public lineChartLabels: Label[] = ['Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'June',
		'July',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec'];
	public lineChartLabelsGv: Label[] = [
		'27-Jan-20',
		'28-Jan-20',
		'29-Jan-20',
		'30-Jan-20',
		'31-Jan-20',
		'1-Feb-20',
		'2-Feb-20',
		'3-Feb-20',
		'4-Feb-20',
		'5-Feb-20',
		'6-Feb-20',
		'7-Feb-20',
		'8-Feb-20',
		'9-Feb-20',
		'10-Feb-20',
		'11-Feb-20',
		'12-Feb-20',
		'13-Feb-20',
		'14-Feb-20',
		'15-Feb-20',
		'16-Feb-20',
		'17-Feb-20',
		'18-Feb-20',
		'19-Feb-20',
		'20-Feb-20',
		'21-Feb-20',
		'22-Feb-20',
		'23-Feb-20',
		'24-Feb-20',
		'25-Feb-20',
		'26-Feb-20',
		'27-Feb-20',
		'28-Feb-20',
		'29-Feb-20',
		'1-Mar-20',
		'2-Mar-20',
		'3-Mar-20',
		'4-Mar-20',
		'5-Mar-20',
		'6-Mar-20',
		'7-Mar-20',
		'8-Mar-20',
		'9-Mar-20',
		'10-Mar-20',
		'11-Mar-20',
		'12-Mar-20',
		'13-Mar-20',
		'14-Mar-20',
		'15-Mar-20',
		'16-Mar-20',
		'17-Mar-20',
		'18-Mar-20',
		'19-Mar-20',
		'20-Mar-20',
		'21-Mar-20',
		'22-Mar-20',
		'23-Mar-20',
		'24-Mar-20',
		'25-Mar-20',
		'26-Mar-20',
		'27-Mar-20',
		'28-Mar-20',
		'29-Mar-20',
		'30-Mar-20',
		'31-Mar-20',
		'1-Apr-20',
		'2-Apr-20',
		'3-Apr-20',
		'4-Apr-20',
		'5-Apr-20',
		'6-Apr-20',
		'7-Apr-20',
		'8-Apr-20',
		'9-Apr-20',
		'10-Apr-20',
		'11-Apr-20',
		'12-Apr-20',
		'13-Apr-20',
		'14-Apr-20',
		'15-Apr-20',
		'16-Apr-20',
		'17-Apr-20',
		'18-Apr-20',
		'19-Apr-20',
		'20-Apr-20',
		'21-Apr-20',
		'22-Apr-20',
		'23-Apr-20',
		'24-Apr-20',
		'25-Apr-20',
		'26-Apr-20',
		'27-Apr-20',
		'28-Apr-20',
		'29-Apr-20',
		'30-Apr-20',
		'1-May-20',
		'2-May-20',
		'3-May-20',
		'4-May-20',
		'5-May-20',
		'6-May-20',
		'7-May-20',
		'8-May-20',
		'9-May-20',
		'10-May-20',
		'11-May-20',
		'12-May-20',
		'13-May-20',
		'14-May-20',
		'15-May-20',
		'16-May-20',
		'17-May-20',
		'18-May-20',
		'19-May-20',
		'20-May-20',
		'21-May-20',
		'22-May-20',
		'23-May-20',
		'24-May-20',
		'25-May-20',
		'26-May-20',
		'27-May-20',
		'28-May-20'

	];
	public lineChartOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false

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
	search: any;
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
