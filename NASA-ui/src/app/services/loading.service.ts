import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { xdescribe } from '@angular/core/testing/src/testing_internal';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {
	private subject: Subject<boolean> = new Subject<boolean>();

	constructor() {

	}

	public getAsObservable(): Observable<boolean> {
		return this.subject.asObservable();
	}

	public reload() {
		for(let i =0; i<5;i++){
			setTimeout(()=>this.subject.next(true));
		}

	}

}
