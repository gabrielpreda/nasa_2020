import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeInterval } from '../model/time-interval';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private httpClient: HttpClient) {
	}

	post() {
		// return this.httpClient.post<any>(this.localAuth, {email: email, password: password}).subscribe(value => value);
	}

	getCovidData(time?: TimeInterval): Observable<any> {
		if ( time === TimeInterval.DAY )
			return this.httpClient.get<any>('/covid/daily');
		else if ( time === TimeInterval.MONTH )
			return this.httpClient.get<any>('/covid/monthly');
		else
			return this.httpClient.get<any>('/covid');
	}
}
