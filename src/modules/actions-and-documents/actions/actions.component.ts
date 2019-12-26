import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';


@Component({
	selector: 'actions',
	templateUrl: './actions.component.html',
	// styleUrls: ['./actions.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsComponent {
	@Input() id;

	constructor() {

	}

	ngOnInit() {
		console.log('actions', this.id);
	}


	ngOnDestroy() {
	}
}
