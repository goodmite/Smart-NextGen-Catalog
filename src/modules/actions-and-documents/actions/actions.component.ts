import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';


@Component({
	selector: 'actions',
	templateUrl: './actions.component.html',
	styleUrls: ['./actions.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsComponent {
	@Input() id;


	data: any;


	constructor() {
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
				docName: 'Req #SW-1234-5600056',
				docStatus: 'Draft',
				docDesc: 'New Apple MacBook',
				docPrice: '$2500',
				docAuthor: 'Rahul Patel'
			});
		}
		this.data = tmpData;
	}
}
