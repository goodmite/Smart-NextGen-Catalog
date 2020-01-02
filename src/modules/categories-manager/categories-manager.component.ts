import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

import { AppConstants } from 'smart-platform-services';

import { CategoriesManagerService } from './categories-manager.service';


@Component({
	selector: 'categories-manager',
	templateUrl: './categories-manager.component.html',
	styleUrls: ['./categories-manager.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesManagerComponent {
	@Input() manifest;

	@ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
	@ViewChild('componentTemplate') componentTemplate: TemplateRef<any>;


	categoriesData: any;


	constructor(private appConstants: AppConstants, private categoriesManager: CategoriesManagerService) {

	}


	ngOnInit() {
		this.categoriesData = this.categoriesManager.getData();
	}


	ngOnDestroy() {

	}


	trackByIndex(index: number) {
		return index;
	}


	onInitialize() {

	}


	onDeinitialize() {

	}


	onActivate() {

	}


	manage(category?: any, index?: number) {
		this.componentContainer.clear();
		this.componentContainer.createEmbeddedView(this.componentTemplate, {
			manifestPath: this.manifest.path, config: Object.assign(this.manifest.config, {
				selectedNodes: category ? [category] : [],
				onSave: (e: any) => {
					console.log(e);
					if (index == undefined) {
						this.categoriesData = this.categoriesData.concat(e.selectedNodes);
					}
					else {
						this.categoriesData[index] = e.selectedNodes[0];
					}
				}
			})
		});
	}


	//	redirect to catalog landing
	browseCatalog() {
		window.open(this.appConstants.userPreferences.URLs.AppURL + 'Catalog/PageLoad/Index?oloc=108&c=NzAwMjE3MDQ1#/catalog/search/0//Relevance/1/e30=/24/', '_blank');
	}
}
