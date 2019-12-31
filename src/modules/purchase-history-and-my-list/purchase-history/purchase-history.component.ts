import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { InjectionContext } from 'smart-module-injector';


@Component({
	selector: 'pursase-history',
	templateUrl: './purchase-history.component.html',
	styleUrls: ['./purchase-history.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseHistoryComponent {
	@Input() id;

	constructor() {
	}


	ngOnInit() {
		console.log('purchase history', this.id);
	}


	ngOnDestroy() {
	}
}
