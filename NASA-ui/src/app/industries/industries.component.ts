import { Component, OnInit } from '@angular/core';
import { IndustriesService } from './industries.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  constructor(public industriesService: IndustriesService) { }

  ngOnInit() {
  }

  getColor(i: number) {
    const step = 255 / this.industriesService.industries.length;
      return `rgb(${120 + (i * (step / 2))}, ${255 - (i * step)}, ${70 - (i * step/4)})`;
  }
}
