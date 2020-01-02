import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';

import { AppConstants } from 'smart-platform-services';


@Component({
	selector: 'action-item-renderer',
	templateUrl: './action-item-renderer.component.html',
	styleUrls: ['../actions.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionItemRendererComponent {
	@Input() item;
	@Input() isLast;
}
