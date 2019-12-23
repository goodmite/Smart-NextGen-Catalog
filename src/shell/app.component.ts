import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as jquery_ from 'jquery';
import 'rxjs/add/operator/filter';
import { AppConstants } from 'smart-platform-services';

const $ = jquery_;
declare var icons: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements AfterViewInit {
	title = 'app';

	constructor(
		private router: Router,
		private appConstants: AppConstants,
		private activatedRoute: ActivatedRoute
	) { }


	ngOnInit() {
		this.appConstants.userPreferences.modelData = {};
	}

	ngAfterViewInit(): void {
		if (typeof icons != 'undefined') {
			$('body').append(icons);
		}
	}
}
