import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class LandingPageService {
    constructor(private translate: TranslateService) {
    }
}