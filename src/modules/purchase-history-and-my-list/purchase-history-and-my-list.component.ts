import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { InjectionContext } from 'smart-module-injector';

import { PurchaseHistoryAndMyListService } from './purchase-history-and-my-list.service';


@Component({
	selector: 'pursase-history-and-my-list',
	templateUrl: './purchase-history-and-my-list.component.html',
	styleUrls: ['./purchase-history-and-my-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseHistoryAndMyListComponent {
	@Input() id;

	@ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
	@ViewChild('componentTemplate') componentTemplate: TemplateRef<any>;

	tabsConfig: any;
	manifest: any;


	constructor(private purchaseHistoryAndMyListService: PurchaseHistoryAndMyListService) {
		//	get tabs config from service
		this.tabsConfig = this.purchaseHistoryAndMyListService.getTabsConfig();
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
