import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AppConstants } from 'smart-platform-services';


@Component({
	selector: 'pursase-history',
	templateUrl: './purchase-history.component.html',
	styleUrls: ['./purchase-history.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseHistoryComponent {
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
		for (let i = 0; i < 10; i++) {
			tmpData.push({
				docName: 'Req #SW-1234-5600056' + (i + 1),
				docStatus: i == 1 || i == 2 ? 'Draft' : 'Approval Pending',
				docStatusKey: i == 1 || i == 2 ? 'draft' : 'approvalPending',
				docDesc: i == 1 || i == 2 ? 'New Apple MacBook' : 'Lenovo Laptop',
				docPrice: i == 1 || i == 2 ? '$2500' : '$3000',
				docAuthor: i == 1 || i == 2 ? 'Rahul Patel' : 'Sushant Ahirrao',
				docCreatedOn: i == 1 || i == 3 ? '2 days ago' : 'Today'
			});
		}
		this.data = tmpData;
	}


	//	Redirect user to manage tasks page
	viewAll() {
		window.open(this.appConstants.userPreferences.URLs.AppURL + 'Smart?oloc=200&c=NzAwMjE3MDQ1#/workQueue', '_blank');
	}
}
