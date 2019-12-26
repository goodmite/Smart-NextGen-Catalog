import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';


@Component({
	selector: 'actions-and-documents',
	templateUrl: './actions-and-documents.component.html',
	// styleUrls: ['./actions-and-documents.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsAndDocumentsComponent {
	@Input() id;

	@ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
	@ViewChild('componentTemplate') componentTemplate: TemplateRef<any>;

	manifest: any;


	constructor() {

	}


	ngOnInit() {
		this.onTabClick('actions/index');
	}


	ngOnDestroy() {
	}


	onInitialize() {
	}


	onDeinitialize() {
	}


	onActivate() {
	}


	onTabClick(manifestPath: string) {
		this.renderComponent(manifestPath);
	}


	renderComponent(manifestPath: string) {
		this.manifest = {
			manifestPath: manifestPath,
			config: {}
		}
		this.componentContainer.clear();
		this.componentContainer.createEmbeddedView(this.componentTemplate, this.manifest);
	}
}
