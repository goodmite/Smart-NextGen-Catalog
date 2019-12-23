import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';


@Component({
	selector: 'forms-manager',
	templateUrl: './forms-manager.component.html',
	// styleUrls: ['./forms-manager.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsManagerComponent {
	@Input() type;
	@Input() data;
	@Input() manifest;

	@ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
	@ViewChild('componentTemplate') componentTemplate: TemplateRef<any>;

	selectedNodes: any;


	constructor() {

	}


	ngOnInit() {
		console.log('tiles manager ngonit', this.data);
	}


	ngOnDestroy() {

	}


	trackByIndex(index: number) {
		return index;
	}


	manage() {
		this.componentContainer.clear();
		this.componentContainer.createEmbeddedView(this.componentTemplate, {
			manifestPath: this.manifest.path, config: Object.assign(this.manifest.config, {
				selectedNodes: this.selectedNodes,
				save: (e: any) => {
					console.log('selected nodes', e);
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
