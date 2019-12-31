import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

import { ActionsAndDocumentsService } from './actions-and-documents.service';


@Component({
	selector: 'actions-and-documents',
	templateUrl: './actions-and-documents.component.html',
	styleUrls: ['./actions-and-documents.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsAndDocumentsComponent {
	@Input() id;

	@ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
	@ViewChild('componentTemplate') componentTemplate: TemplateRef<any>;

	tabsConfig: any;
	manifest: any;


	constructor(private actionsAndDocumentsService: ActionsAndDocumentsService) {
		//	get tabs config from service
		this.tabsConfig = this.actionsAndDocumentsService.getTabsConfig();
	}


	ngOnInit() {
		this.onTabClick(this.tabsConfig[0], true);
	}


	ngOnDestroy() {
	}


	onInitialize() {
	}


	onDeinitialize() {
	}


	onActivate() {
	}


	onTabClick(tab: any, isInit?: boolean) {
		if (!isInit && tab.isActive) {
			return;
		}
		if (!isInit) {
			for (let i = 0; i < this.tabsConfig.length; i++) {
				this.tabsConfig[i].isActive = false;
			}
			tab.isActive = true;
		}
		this.renderComponent(tab.manifestPath);
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
