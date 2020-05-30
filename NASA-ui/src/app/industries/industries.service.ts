import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndustriesService {

  industries = [
    {name: 'Aeronautics industries'},
    {name: 'Automotive industry'},
    {name: 'Biotechnology'},
    {name: 'Chemicals'},
    {name: 'Construction'},
    {name: 'Cosmetics'},
    {name: 'Defence industries'},
    {name: 'Electrical and electronic engineering industries'},
    {name: 'Firearms'},
    {name: 'Food and drink industry'},
    {name: 'Gambling'},
    {name: 'Healthcare industries'},
    {name: 'Maritime industries'},
    {name: 'Mechanical engineering'},
    {name: 'Medical devices'},
    {name: 'Postal services'},
    {name: 'Pressure equipment and gas appliances'},
    {name: 'Raw materials, metals, minerals and forest-based industries'},
    {name: 'Social economy'},
    {name: 'Space'},
    {name: 'Textiles, Fashion and creative industries'},
    {name: 'Tourism'},
    {name: 'Toys'}
  ];
  constructor() { }
}
