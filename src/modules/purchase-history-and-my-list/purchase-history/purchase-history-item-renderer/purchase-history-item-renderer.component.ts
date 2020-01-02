import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';


@Component({
	selector: 'purchase-history-item-renderer',
	templateUrl: './purchase-history-item-renderer.component.html',
	styleUrls: ['../purchase-history.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseHistoryItemRendererComponent {
	@Input() item;
	@Input() isLast;
}
