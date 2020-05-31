import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { TimeInterval } from '../model/time-interval';
import { LoadingService } from '../services/loading.service';
import { MatSliderChange } from '@angular/material/slider';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

	mapSeries = [];
	covidDailySeries = [];
	covidMonthlySeries = [];
	covidSeries = [];
	covidCheck: boolean = false;
	covidDCheck: boolean = false;
	covidMCheck: boolean = false;
	sliderVisible = false;

	constructor(private api: ApiService, private loadingService: LoadingService) {
	}

	ngOnInit() {
		this.covidDaily();
		this.covidMonthly();
		this.covid();
	}

	private covidDaily() {
		this.api.getCovidData(TimeInterval.DAY).subscribe(value => {
			value.forEach(data => {
				this.covidDailySeries.push({countryCode: data.countryCode, casePercentage: data.cases / data.popData2018 * 100, year:data.year, month:data.month,day:data.day});
			})
			console.log(this.mapSeries)
			this.covidDailySeries = this.covidDailySeries.sort((n1, n2) => {
				if ( n1.year === n2.year ) {
					if ( n1.month === n2.month ) {
						if ( n1.day === n2.day ) {

							if ( n1.casePercentage > n2.casePercentage ) {
								return 1;
							}

							if ( n1.casePercentage < n2.casePercentage ) {
								return -1;
							}
						} else {
							if ( n1.day > n2.day ) {
								return 1;
							}

							if ( n1.day < n2.day ) {
								return -1;
							}
						}
					} else {
						if ( n1.month > n2.month ) {
							return 1;
						}

						if ( n1.month < n2.month ) {
							return -1;
						}
					}
				} else {
					if ( n1.year > n2.year ) {
						return 1;
					}

					if ( n1.year < n2.year ) {
						return -1;
					}
				}
				return 0;
			});
			console.log(this.mapSeries);
		});
	}

	private covid()  {
		this.api.getCovidData().subscribe(value => {
			value.forEach(data => {
				this.covidSeries.push({countryCode: data.countryCode, casePercentage: data.cases / data.popData2018 * 100});
			})
			console.log(this.mapSeries)
			this.covidSeries = this.covidSeries.sort((n1, n2) => {
				if ( n1.casePercentage > n2.casePercentage ) {
					return 1;
				}

				if ( n1.casePercentage < n2.casePercentage ) {
					return -1;
				}

				return 0;
			});
			this.mapSeries = this.covidSeries;
			this.loadingService.reload();
			console.log(this.mapSeries);
		});
	}

	private covidMonthly() {
		this.api.getCovidData(TimeInterval.MONTH).subscribe(value => {
			value.forEach(data => {
				this.covidMonthlySeries.push({countryCode: data.countryCode, casePercentage: data.cases / data.popData2018 * 100, year:data.year, month:data.month,day:data.day});
			})
			console.log(this.mapSeries)
			this.covidMonthlySeries = this.covidMonthlySeries.sort((n1, n2) => {
				if ( n1.year === n2.year ) {
					if ( n1.month === n2.month ) {

						if ( n1.casePercentage > n2.casePercentage ) {
							return 1;
						}

						if ( n1.casePercentage < n2.casePercentage ) {
							return -1;
						}
					} else {
						if ( n1.month > n2.month ) {
							return 1;
						}

						if ( n1.month < n2.month ) {
							return -1;
						}
					}
				} else {
					if ( n1.year > n2.year ) {
						return 1;
					}

					if ( n1.year < n2.year ) {
						return -1;
					}
				}
				return 0;
			});
		});
	}

	checkCovid(value: any) {
		if ( this.covidCheck == true ) {
			this.mapSeries = this.covidSeries;
			this.loadingService.reload();

			this.covidDCheck = false;
			this.covidMCheck = false;
			this.sliderVisible = false;
		}
	}

	checkDCovid(value: any) {
		if ( this.covidDCheck == true ) {
			this.mapSeries = this.covidDailySeries;
			this.loadingService.reload();

			this.covidCheck = false;
			this.covidMCheck = false;
			this.sliderVisible = true;
		}
	}

	checkMCovid(value: any) {
		if ( this.covidMCheck == true ) {
			this.mapSeries = this.covidMonthlySeries;
			this.loadingService.reload();

			this.covidCheck = false;
			this.covidDCheck = false;
			this.sliderVisible = true;
		}

	}

	formatLabel(value: number) {
		if ( value >= 1000 ) {
			return Math.round(value / 1000) + 'k';
		}

		return value;
	}

	getInterval() {
		if ( this.covidDCheck) {
			return this.covidDailySeries.length;
		}
		if ( this.covidMCheck ) {
			return this.covidMonthlySeries.length;
		}
		// return this.covidDailySeries.;

		return 1;
	}

	onInputChange($event: MatSliderChange) {
		console.log($event.value);
		if ( this.covidDCheck == true) {
			// console.log(this.covidDailySeries.filter().day)
			// console.log(this.covidDailySeries[$event.value].year)
			// console.log(this.covidDailySeries[$event.value].month)
			this.mapSeries = this.covidDailySeries.filter(value => {
				value.year == this.covidDailySeries[$event.value].year &&
				value.day == this.covidDailySeries[$event.value].day &&
				value.month == this.covidDailySeries[$event.value].month
			});
		}
		console.log(this.covidMCheck )

		if ( this.covidMCheck == true) {
			console.log(this.covidMonthlySeries);
			this.mapSeries = this.covidMonthlySeries.filter(value => {
				value.year === this.covidMonthlySeries[$event.value].year &&
				value.month === this.covidMonthlySeries[$event.value].month
			});
		}
		console.log(this.mapSeries)
		this.loadingService.reload();
	}
}
