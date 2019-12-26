import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { InjectionContext } from 'smart-module-injector';


@Component({
	selector: 'my-list',
	templateUrl: './my-list.component.html',
	// styleUrls: ['./my-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyListComponent {
	@Input() id;

	constructor() {
	}


	ngOnInit() {
		console.log('my list', this.id);
	}


	ngOnDestroy() {
	}
}
