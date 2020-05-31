import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var d3: any;
declare var topojson: any;

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
		const avaibleCountries = ['Austria', 'Belgium', 'Bulgaria', 'Cyprus', 'Croatia', 'Denmark', 'Estonia',
			'Finland', 'France', 'Germany', 'Greece', 'Ireland', 'Iceland', 'Italy', 'Latvia', 'Lithuania',
			'Luxembourg', 'Malta', 'Norway', 'Poland', 'Portugal', 'Czech Republic', 'Romania', 'Slovakia',
			'Slovenia', 'Spain', 'Sweden', 'Hungary', 'United Kingdom'];
		let year_radio = 2010;
		const w = 800, h = 600;

		const projection = d3.geo.mercator()
			.center([13, 52])
			.translate([w / 2, h / 2])
			.scale([w / 1.5]);

		const path = d3.geo.path()
			.projection(projection);

		const svg = d3.select('#container')
			.append('svg')
			.attr('width', w)
			.attr('height', h);

		const div = d3.select('body').append('div')
			.attr('class', 'tooltip')
			.style('opacity', 0);

		const color = d3.scale.linear()
			.domain([0, 1, 2300])      // <--- min and MAX of your value
			.range(['#000000', '#ffffff', 'lightblue']);

		// tslint:disable-next-line:prefer-const
		let dess = [], error, vector = svg;
		let thisInstance = this;
		d3.queue()
			.defer(d3.json, '../../assets/europe.topojson')
			.defer(d3.csv, '../../assets/data.csv')
			.await(makemap);

		// tslint:disable-next-line:no-shadowed-variable
		function makemap(error, europe, dessease) {
			dess = d3.nest()
				.key(function (d) {
					return d.Year;
				})
				.map(dessease);

			const counties = topojson.feature(europe, europe.objects.collection);
			vector.selectAll('path')
				.data(counties.features)
				.enter()
				.append('path')
				.attr('class', 'county')
				.attr('id', function (d) {
					return 'coun' + d.properties.indx;
				})
				.attr('d', path)
				.on('mouseover', function (d) {
					d3.select('#coun' + d.properties.indx).style('stroke', '777').style('stroke-width', 2);
					showInfo(d);
				})
				.on('click', function (d) {
					d3.select('#coun' + d.properties.indx).style('stroke', '777').style('stroke-width', 2);
					thisInstance.click(d);
				})
				.on('mouseout', function (d) {
					d3.select('#coun' + d.properties.indx).style('stroke', 'ddd').style('stroke-width', 1);
				});
			colorThis();
		}

		function colorThis() {
			vector.selectAll('path')
				.style('fill', function (d) {
					return color(+csv_value(+d.properties.indx));
				});
		}

		const csv_value = function (country_index) {
			const piece = dess[year_radio].slice();
			const data_pointer = piece.find(function (country_row) {
				return +country_row.Indx == +country_index;
			});

			if ( data_pointer == null ) {
				return 0;
			} else {
				return data_pointer.Data;
			}
		};

		const showInfo = function (d) {
			// tslint:disable-next-line:max-line-length
			$('#info').html('Year: <b>' + year_radio + '</b> Country: <b>' + d.properties.name + '</b> Value: <b>' + csv_value(+d.properties.indx) + '</b>');
		};
	}


	click(d){
		console.log('click on ', d);
	}
}
