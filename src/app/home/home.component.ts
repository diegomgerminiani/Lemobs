import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	viz: any;

	constructor() {
	}

	ngOnInit(): void {

		var tableauViz = document.getElementById('tableauViz');
		var url = 'https://public.tableau.com/views/COVID-19Cases_15840488375320/COVID-19GlobalView?:language=pt&:display_count=y&:origin=viz_share_link';
		var options = {
				hideTabs: false,
				hideToolbar: true,
				width: "1400px",
				height: "777px",
				device: 'desktop',
				onFirstInteractive: function() {
					// The viz is now ready and can be safely used.
					console.log("Run this code when the viz has finished loading.");
				}
		};
		// Creating a viz object and embed it in the container div.
		this.viz = new tableau.Viz(tableauViz, url, options);
	}

}
