import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

import { CategoriesManagerService } from './categories-manager.service';


@Component({
	selector: 'categories-manager',
	templateUrl: './categories-manager.component.html',
	// styleUrls: ['./categories-manager.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesManagerComponent {
	@Input() manifest;

	@ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
	@ViewChild('componentTemplate') componentTemplate: TemplateRef<any>;


	categoriesData: any;


	constructor(private categoriesManager: CategoriesManagerService) {

	}


	ngOnInit() {
		this.categoriesData = this.categoriesManager.getData();
	}


	ngOnDestroy() {

	}


	trackByIndex(index: number) {
		return index;
	}


	manage(category?: any, index?: number) {
		this.componentContainer.clear();
		this.componentContainer.createEmbeddedView(this.componentTemplate, {
			manifestPath: this.manifest.path, config: Object.assign(this.manifest.config, {
				selectedNodes: category ? [category] : [],
				onSave: (e: any) => {
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


	onInitialize() {

	}


	onDeinitialize() {

	}


	onActivate() {

	}
}
