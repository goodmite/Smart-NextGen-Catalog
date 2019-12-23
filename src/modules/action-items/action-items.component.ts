import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';


@Component({
	selector: 'action-items',
	templateUrl: './action-items.component.html',
	// styleUrls: ['./action-items.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionItemsComponent {
	@Input() id;

	constructor() {

	}

	ngOnInit() {
		console.log('action items', this.id);
	}


	ngOnDestroy() {
	}
}
