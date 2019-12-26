import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { InjectionContext } from 'smart-module-injector';


@Component({
	selector: 'pursase-history-and-my-list',
	templateUrl: './purchase-history-and-my-list.component.html',
	// styleUrls: ['./purchase-history-and-my-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseHistoryAndMyListComponent {
	@Input() id;

	@ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
	@ViewChild('componentTemplate') componentTemplate: TemplateRef<any>;

	manifest: any;


	constructor() {

	}


	ngOnInit() {
		this.onTabClick('purchaseHistory/index');
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
