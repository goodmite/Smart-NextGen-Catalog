import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';

import { ISmartLayoutManager } from 'smart-layout-manager';

import { LayoutService } from "./layout.service";



@Component({
	selector: 'layout-page',
	templateUrl: './layout.component.html',
	// styleUrls: ['./layout.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
	@Input() id;

	layoutManagerConfig: ISmartLayoutManager;
	dataModel: any;


	constructor() {

	}

	ngOnInit() {
		this.getDataModel();


		this.layoutManagerConfig = {
			columns: [{
				width: '70%',
				rows: [{
					manifest: {
						path: 'categoriesManager/index',
						config: {
							manifest: {
								path: 'categoryPopup/index',
								config: {}
							}
						}
					}
				}, {
					manifest: {
						path: 'formsManager/index',
						config: {
							manifest: {
								path: 'formPopup/index',
								config: {}
							}
						}
					}
				}]
			}, {
				width: '30%',
				rows: [{
					manifest: {
						path: 'actionItems/index',
						config: {
						}
					}
				}, {
					manifest: {
						path: 'purchaseHistory/index',
						config: {
						}
					}
				}]
			}]
		};
	}


	ngOnDestroy(): void {
	}


	getDataModel() {
		this.dataModel = {
			categories: [{
				id: 1,
				name: 'cat 1',
				description: 'cat 1 description'
			}, {
				id: 2,
				name: 'cat 2',
				description: 'cat 2 description'
			}],
			forms: [{
				id: 1,
				name: 'form 1',
				description: 'form 1 description'
			}, {
				id: 2,
				name: 'form 2',
				description: 'form 2 description'
			}],
			actionItems: {

			},
			purchaseHistory: {

			}
		};
	}

}
