import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';

import { AppConstants } from 'smart-platform-services';


@Component({
	selector: 'document-item-renderer',
	templateUrl: './document-item-renderer.component.html',
	styleUrls: ['../documents.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentItemRendererComponent {
	@Input() item;
	@Input() isLast;
}
