import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { InjectionContext } from 'smart-module-injector';


@Component({
	selector: 'documents',
	templateUrl: './documents.component.html',
	// styleUrls: ['./documents.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentsComponent {
	@Input() id;

	constructor() {
	}


	ngOnInit() {
		console.log('documents', this.id);
	}


	ngOnDestroy() {
	}
}
