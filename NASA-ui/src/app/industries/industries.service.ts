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
		{chart1Dataset: undefined, name: 'Healthcare industries'},
		{chart1Dataset: undefined, name: 'Medical devices'},
		{chart1Dataset: undefined, name: 'Biotechnology'},
		{chart1Dataset: undefined, name: 'Chemicals'},
		{chart1Dataset: undefined, name: 'Postal services'},
		{chart1Dataset: undefined, name: 'Construction'},
		{chart1Dataset: undefined, name: 'Aeronautics industries'},
		{chart1Dataset: undefined, name: 'Automotive industry'},
		{chart1Dataset: undefined, name: 'Manufacturing'},
		{chart1Dataset: undefined, name: 'Maritime industries'},
		{chart1Dataset: undefined, name: 'Mechanical engineering'},
		{chart1Dataset: undefined, name: 'Food and drink industry'},
		{chart1Dataset: undefined, name: 'Tourism'},
		{chart1Dataset: undefined, name: 'Social economy'}
	];

	constructor() {
		this.industries.forEach(value => {
			let data: ChartDataSets[] = [
				{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
				{data: [65, 90, 80, 44, 11, 78, 99], label: 'Series B'},
			];
			data[0].data = Array.from({length: 7}, () => Math.floor(Math.random() * 39));
			data[1].data = Array.from({length: 7}, () => Math.floor(Math.random() * 39));
			value.chart1Dataset = data
		})
		this.coalImport.forEach(value => {
			console.log([
				8947,
				8796,
				9741,
				10381,
				11068,
				11176,
				10315,
				10009,
				9406,
				8641,
				7803,
				8668
			].reverse())
		});

	}

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	public SO2CMASS: ChartDataSets[] = [
		{data: [2.1e-11, 2.28e-11, 1.79e-11, 6.13e-12, 1.05e-11, 5.44e-12], label: 'SO2CMASS'}
	];
	public SO2SMASS: ChartDataSets[] = [{data: [5.93e-18, 1.14e-17, 4.92e-18, 6.65e-18, 5.94e-18, 2.37e-18], label: 'SO2SMASS'}];

	public coalImp: ChartDataSets[] = [
		{data: [2049,
				1865,
				2025,
				1984,
				1779,
				1676,
				1949,
				1843,
				1768,
				1933,
				1754,
				1799], label: '2019'},
		{data: [1751], label: '2020'}
		];
	public oilImp: ChartDataSets[] = [
		{data: [1041  ,
				940   ,
				869   ,
				958   ,
				1070  ,
				1033  ,
				1037  ,
				1043  ,
				1038  ,
				1086  ,
				987   ,
				1045

			], label: '2019'},
		{data: [1030], label: '2020'}
		];

	public COCL: ChartDataSets[] = [{
		data: [0.000594781,
			0.000591947,
			0.000603098,
			0.000623794,
			0.000595914,
			0.000555967,
			0.000557314,
			0.000575407,
			0.000578617,
			0.000547452,
			0.00054836,
			0.000575244,
			0.000580745,
			0.000588228,
			0.000613297,
			0.00062734], label: 'COCL'
	}];
	public COEM: ChartDataSets[] = [{
		data: [5.17e-11,
			5.23e-11,
			1.18e-10,
			1.01e-10,
			1.29e-10,
			1.84e-10,
			2.17e-10,
			1.81e-10,
			1.13e-10,
			7.3e-11,
			5.45e-11,
			5.25e-11,
			5.17e-11,
			9.49e-11,
			1.96e-10,
			1.27e-10], label: 'COEM'
	}];
	public COLS: ChartDataSets[] = [{
		data: [2.63e-11,
			3.84e-11,
			7.97e-11,
			1.57e-10,
			2.4e-10,
			2.54e-10,
			2.42e-10,
			2.03e-10,
			1.67e-10,
			1.08e-10,
			5.13e-11,
			2.9e-11,
			2.57e-11,
			3.81e-11,
			8.52e-11,
			1.6e-10], label: 'COLS'
	}];
	public COPD: ChartDataSets[] = [{
		data: [6.74e-12,
			1.1e-11,
			2.46e-11,
			4.9e-11,
			8.44e-11,
			1.11e-10,
			1.01e-10,
			8.75e-11,
			6.56e-11,
			4.33e-11,
			1.82e-11,
			8.62e-12,
			7.53e-12,
			1.11e-11,
			2.51e-11,
			5.03e-11], label: 'COPD'
	}];
	public COSC: ChartDataSets[] = [{
		data: [119.4007,
			112.52769,
			108.51534,
			107.13208,
			106.99274,
			102.15382,
			110.1101,
			110.070694,
			105.17496,
			106.19682,
			98.856895,
			110.96011,
			111.35303,
			108.95084,
			114.99646,
			109.6581], label: 'COSC'
	}];

	public co2Ro: {
		Country: any,
		Date: any,
		COCL: any,
		COEM: any,
		COLS: any,
		COPD: any,
		COSC: any
	}[] =
		[
			{
				"Country": "Romania",
				"Date": 201901,
				"COCL": 0.000594781,
				"COEM": 5.17e-11,
				"COLS": 2.63e-11,
				"COPD": 6.74e-12,
				"COSC": 119.4007
			},
			{
				"Country": "Romania",
				"Date": 201902,
				"COCL": 0.000591947,
				"COEM": 5.23e-11,
				"COLS": 3.84e-11,
				"COPD": 1.1e-11,
				"COSC": 112.52769
			},
			{
				"Country": "Romania",
				"Date": 201903,
				"COCL": 0.000603098,
				"COEM": 1.18e-10,
				"COLS": 7.97e-11,
				"COPD": 2.46e-11,
				"COSC": 108.51534
			},
			{
				"Country": "Romania",
				"Date": 201904,
				"COCL": 0.000623794,
				"COEM": 1.01e-10,
				"COLS": 1.57e-10,
				"COPD": 4.9e-11,
				"COSC": 107.13208
			},
			{
				"Country": "Romania",
				"Date": 201905,
				"COCL": 0.000595914,
				"COEM": 1.29e-10,
				"COLS": 2.4e-10,
				"COPD": 8.44e-11,
				"COSC": 106.99274
			},
			{
				"Country": "Romania",
				"Date": 201906,
				"COCL": 0.000555967,
				"COEM": 1.84e-10,
				"COLS": 2.54e-10,
				"COPD": 1.11e-10,
				"COSC": 102.15382
			},
			{
				"Country": "Romania",
				"Date": 201907,
				"COCL": 0.000557314,
				"COEM": 2.17e-10,
				"COLS": 2.42e-10,
				"COPD": 1.01e-10,
				"COSC": 110.1101
			},
			{
				"Country": "Romania",
				"Date": 201908,
				"COCL": 0.000575407,
				"COEM": 1.81e-10,
				"COLS": 2.03e-10,
				"COPD": 8.75e-11,
				"COSC": 110.070694
			},
			{
				"Country": "Romania",
				"Date": 201909,
				"COCL": 0.000578617,
				"COEM": 1.13e-10,
				"COLS": 1.67e-10,
				"COPD": 6.56e-11,
				"COSC": 105.17496
			},
			{
				"Country": "Romania",
				"Date": 201910,
				"COCL": 0.000547452,
				"COEM": 7.3e-11,
				"COLS": 1.08e-10,
				"COPD": 4.33e-11,
				"COSC": 106.19682
			},
			{
				"Country": "Romania",
				"Date": 201911,
				"COCL": 0.00054836,
				"COEM": 5.45e-11,
				"COLS": 5.13e-11,
				"COPD": 1.82e-11,
				"COSC": 98.856895
			},
			{
				"Country": "Romania",
				"Date": 201912,
				"COCL": 0.000575244,
				"COEM": 5.25e-11,
				"COLS": 2.9e-11,
				"COPD": 8.62e-12,
				"COSC": 110.96011
			},
			{
				"Country": "Romania",
				"Date": 202001,
				"COCL": 0.000580745,
				"COEM": 5.17e-11,
				"COLS": 2.57e-11,
				"COPD": 7.53e-12,
				"COSC": 111.35303
			},
			{
				"Country": "Romania",
				"Date": 202002,
				"COCL": 0.000588228,
				"COEM": 9.49e-11,
				"COLS": 3.81e-11,
				"COPD": 1.11e-11,
				"COSC": 108.95084
			},
			{
				"Country": "Romania",
				"Date": 202003,
				"COCL": 0.000613297,
				"COEM": 1.96e-10,
				"COLS": 8.52e-11,
				"COPD": 2.51e-11,
				"COSC": 114.99646
			},
			{
				"Country": "Romania",
				"Date": 202004,
				"COCL": 0.00062734,
				"COEM": 1.27e-10,
				"COLS": 1.6e-10,
				"COPD": 5.03e-11,
				"COSC": 109.6581
			}
		];


	public so2Ro: { country: any, date: any, SO2CMASS: any, SO2SMASS: any }[] = [
		{
			"country": "Romania",
			"date": 201911,
			"SO2CMASS": 2.1e-11,
			"SO2SMASS": 5.93e-18
		},
		{
			"country": "Romania",
			"date": 201912,
			"SO2CMASS": 2.28e-11,
			"SO2SMASS": 1.14e-17
		},
		{
			"country": "Romania",
			"date": 202001,
			"SO2CMASS": 1.79e-11,
			"SO2SMASS": 4.92e-18
		},
		{
			"country": "Romania",
			"date": 202002,
			"SO2CMASS": 6.13e-12,
			"SO2SMASS": 6.65e-18
		},
		{
			"country": "Romania",
			"date": 202003,
			"SO2CMASS": 1.05e-11,
			"SO2SMASS": 5.94e-18
		},
		{
			"country": "Romania",
			"date": 202004,
			"SO2CMASS": 5.44e-12,
			"SO2SMASS": 2.37e-18
		}
	];

	public coalImport: { Country: any, GDP: any, Date: any, Value: any, Unit: any }[] = [
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-Jan",
			"Value": 2049,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-Feb",
			"Value": 1865,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-Mar",
			"Value": 2025,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-Apr",
			"Value": 1984,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-May",
			"Value": 1779,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-Jun",
			"Value": 1676,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-Jul",
			"Value": 1949,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-Aug",
			"Value": 1843,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-Sep",
			"Value": 1768,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-Oct",
			"Value": 1933,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-Nov",
			"Value": 1754,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "19-Dec",
			"Value": 1799,
			"Unit": "thousand tones"
		},
		{
			"Country": "Romania",
			"GDP": 199,
			"Date": "20-Jan",
			"Value": 1751,
			"Unit": "thousand tones"
		}
	];
	public airTrDataS: ChartDataSets[] = [{data: [8668, 7803, 8641, 9406, 10009, 10315, 11176, 11068, 10381, 9741, 8796, 8947], label: 'Commercial passenger air flights'},
		{data: [995641, 935140, 1058500, 1189714, 1299385, 1371253, 1467247, 1501584, 1381941, 1267625, 1121431, 1112654], label: 'Passengers on board'}
		];


	public airTrData = [
		{
			"Label": "Commercial passenger air flights",
			"Country": "Romania",
			"Country_code": "ROU",
			"unit": "FLIGHT",
			"tra_meas": "CAF_PAS",
			"rep_airp": "RO_LROP",
			"schedule": "TOT",
			"tra_cov_per_time": "TOTAL",
			"2020M04": "N/A",
			"2020M03": "N/A",
			"2020M02": "N/A",
			"2020M01": "N/A",
			"2019M12": 8947,
			"2019M11": 8796,
			"2019M10": 9741,
			"2019M09": 10381,
			"2019M08": 11068,
			"2019M07": 11176,
			"2019M06": 10315,
			"2019M05": 10009,
			"2019M04": 9406,
			"2019M03": 8641,
			"2019M02": 7803,
			"2019M01": 8668
		},
		{
			"Label": "Passengers on board",
			"Country": "Romania",
			"Country_code": "ROU",
			"unit": "PASSENGERS",
			"tra_meas": "PAS_BRD",
			"rep_airp": "RO_LROP",
			"schedule": "TOT",
			"tra_cov_per_time": "TOTAL",
			"2020M04": "N/A",
			"2020M03": "N/A",
			"2020M02": "N/A",
			"2020M01": "N/A",
			"2019M12": 1112654,
			"2019M11": 1121431,
			"2019M10": 1267625,
			"2019M09": 1381941,
			"2019M08": 1501584,
			"2019M07": 1467247,
			"2019M06": 1371253,
			"2019M05": 1299385,
			"2019M04": 1189714,
			"2019M03": 1058500,
			"2019M02": 935140,
			"2019M01": 995641
		}
	];

	public governmentResp: ChartDataSets[] = [{data: [

			2.78 ,
			2.78 ,
			2.78 ,
			2.78 ,
			2.78 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			5.56 ,
			16.67,
			16.67,
			19.44,
			19.44,
			19.44,
			19.44,
			19.44,
			19.44,
			19.44,
			19.44,
			19.44,
			19.44,
			33.33,
			36.11,
			36.11,
			47.22,
			61.11,
			61.11,
			61.11,
			61.11,
			61.11,
			61.11,
			61.11,
			61.11,
			61.11,
			69.44,
			75   ,
			75   ,
			75   ,
			78.7 ,
			78.7 ,
			78.7 ,
			78.7 ,
			78.7 ,
			81.48,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			87.04,
			78.7 ,
			78.7 ,
			78.7 ,
			78.7 ,
			72.22,
			72.22,
			72.22,
			72.22,
			72.22,
			72.22,
			72.22,
			72.22,
			72.22,
			72.22,
			72.22,
			72.22,
			72.22,
			72.22

		], label: 'CORONAVIRUS GOVERNMENT RESPONSE'}];

}
