import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';

import { AppConstants } from 'smart-platform-services';


@Component({
	selector: 'documents',
	templateUrl: './documents.component.html',
	styleUrls: ['./documents.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentsComponent {
	@Input() id;

	data: any;


	constructor(private appConstants: AppConstants) {
		this.data = [];
	}


	ngOnInit() {
		this.getData();
	}


	ngOnDestroy() {
	}


	getData() {
		let tmpData = [];
		for (let i = 0; i < 6; i++) {
			tmpData.push({
				docName: 'Req #SW-1234-5600056' + (i + 1),
				docStatus: i == 3 || i == 4 ? 'Draft' : 'Approval Pending',
				docStatusKey: i == 3 || i == 4 ? 'draft' : 'approvalPending',
				docDesc: i == 1 || i == 4 ? 'New Apple MacBook' : 'Lenovo Laptop',
				docPrice: i == 3 || i == 2 ? '$2500' : '$3000',
				docAuthor: i == 1 || i == 3 ? 'Rahul Patel' : 'Sushant Ahirrao',
				docCreatedOn: i == 1 || i == 3 ? '2 days ago' : 'Today'
			});
		}
		this.data = tmpData;
	}


	//	Redirect user to manage tasks page
	viewAll() {
		window.open(this.appConstants.userPreferences.URLs.AppURL + 'Smart?oloc=200&c=MTk4Nzk40&dd=YnBjPTE5ODc5OCZjYz00MTExMzQwNDAwMDAwMQ2#/manage', '_blank');
	}
}
