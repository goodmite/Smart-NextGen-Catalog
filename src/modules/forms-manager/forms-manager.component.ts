import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

import { FormsManagerService } from './forms-manager.service';


@Component({
	selector: 'forms-manager',
	templateUrl: './forms-manager.component.html',
	styleUrls: ['./forms-manager.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsManagerComponent {
	@Input() type;
	@Input() data;
	@Input() manifest;

	@ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
	@ViewChild('componentTemplate') componentTemplate: TemplateRef<any>;


	formsData: any;


	constructor(private formsManagerService: FormsManagerService) {

	}


	ngOnInit() {
		this.formsData = this.formsManagerService.getData();
	}


	ngOnDestroy() {

	}


	trackByIndex(index: number) {
		return index;
	}


	manage(form?: any, index?: number) {
		this.componentContainer.clear();
		this.componentContainer.createEmbeddedView(this.componentTemplate, {
			manifestPath: this.manifest.path, config: Object.assign(this.manifest.config, {
				selectedNodes: form ? [form] : [],
				onSave: (e: any) => {
					console.log(e);
					if (index == undefined) {
						this.formsData = this.formsData.concat(e.selectedNodes);
					}
					else {
						this.formsData[index] = e.selectedNodes[0];
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
