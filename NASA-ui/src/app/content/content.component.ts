import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { TimeInterval } from '../model/time-interval';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

	mapSeries = [];

	constructor(private api: ApiService) {
	}

	ngOnInit() {
		this.api.getCovidData().subscribe(value => {
			value.forEach(data => {
				this.mapSeries.push({countryCode: data.countryCode, casePercentage: data.cases / data.popData2018 * 100});
			})
			console.log(this.mapSeries)
			this.mapSeries = this.mapSeries.sort((n1, n2) => {
				if ( n1.casePercentage > n2.casePercentage ) {
					return 1;
				}

				if ( n1.casePercentage < n2.casePercentage ) {
					return -1;
				}

				return 0;
			});
			console.log(this.mapSeries);
		});
	}

}
