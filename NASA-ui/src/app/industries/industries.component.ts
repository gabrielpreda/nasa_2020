import { Component, Inject, OnInit } from '@angular/core';
import { IndustriesService } from './industries.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  constructor(public industriesService: IndustriesService, public dialogRef: MatDialogRef<IndustriesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  getColor(i: number) {
    const step = 255 / this.industriesService.industries.length;
      return `rgb(${120 + (i * (step / 2))}, ${255 - (i * step)}, ${70 - (i * step/4)})`;
  }
}
