import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { IManifestCollection, SmartInjectorModule } from 'smart-module-injector';
import { ChannelService } from 'smart-platform-services';

import { SharedTranslateModule } from '../shared/translate.module';
import { BaseInterceptService, BaseService, ConsoleLoggerService, LandingPageService, LoggerService } from './services';


export const coreManifest: IManifestCollection = [
	{ path: 'categoriesManager', loadChildren: '../modules/categories-manager/categories-manager-routing.module#CategoriesManagerRoutingModule' },
	{ path: 'categoryPopup', loadChildren: '../modules/categories-manager/category-popup/category-popup-routing.module#CategoryPopupModule' },
	{ path: 'formsManager', loadChildren: '../modules/forms-manager/forms-manager-routing.module#FormsManagerRoutingModule' },
	{ path: 'formPopup', loadChildren: '../modules/forms-manager/form-popup/form-popup-routing.module#FormPopupModule' },

	{ path: 'actionItems', loadChildren: '../modules/action-items/action-items-routing.module#ActionItemsRoutingModule' },
	{ path: 'purchaseHistory', loadChildren: '../modules/purchase-history/purchase-history-routing.module#PurchaseHistoryRoutingModule' }
];

@NgModule({
	imports: [
		CommonModule,
		SharedTranslateModule,
		SmartInjectorModule.forRoot(coreManifest)
	],
	exports: [
		SmartInjectorModule
	],
	providers: [
		ChannelService,
		LandingPageService,
		{ provide: 'channelServiceBufferSize', useValue: 300 }, //set your value here
		{ provide: 'channelServiceTimeout', useValue: 150000 }, //set your value here
		{ provide: 'channelServiceLogSize', useValue: 100 } //set your value here
	]
})
export class CoreModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				BaseService,
				LoggerService,
				{ provide: HTTP_INTERCEPTORS, useClass: BaseInterceptService, multi: true },
				{ provide: LoggerService, useClass: ConsoleLoggerService }
			]
		};
	}
}
