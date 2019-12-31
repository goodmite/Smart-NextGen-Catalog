import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';

import { ISmartLayoutManager } from 'smart-layout-manager';

import { LayoutService } from "./layout.service";



@Component({
	selector: 'layout-page',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
	scrollConfig;
	categoriesData = [
		{
			ID: 1,
			Name: 'cat 1'
		},
		{
			ID: 2,
			Name: 'cat 2'
		}
	];

	formsData = [
		{
			ID: 1,
			Name: 'cat 1'
		},
		{
			ID: 2,
			Name: 'cat 2'
		},
		{
			ID: 3,
			Name: 'cat 3'
		}
	];

	docmemnt = [
		{
			docID: "1",
			docTitle: "Req #SW-2020",
			docStatus: "Approval Pending",
			docStatusColor: "approval-pending",
			docProd: "New apple Mac Book",
			docProdPrice: "$254.4",
			docBy: "Jessica Miller"
		},
		{
			docID: "2",
			docTitle: "Req #SW-2022",
			docStatus: "Draft",
			docStatusColor: "draft",
			docProd: "Google Pixel Book",
			docProdPrice: "$4500.00",
			docBy: "Self"
		}
	]

	@Input() id;

	layoutManagerConfig: ISmartLayoutManager;
	dataModel: any;


	constructor() {
		this.scrollConfig = {
			height: "200px"
		}
	}

	ngOnInit() {
		this.getDataModel();


		this.layoutManagerConfig = {
			columns: [{
				width: '70%',
				cssClass: 'col s12 l9 m9',
				// borderClass: '',
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
				cssClass: 'col s12 l3 m3',
				width: '30%',
				rows: [{
					manifest: {
						path: 'actionsAndDocuments/index',
						config: {
						}
					}
				}, {
					manifest: {
						path: 'purchaseHistoryAndMyList/index',
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
