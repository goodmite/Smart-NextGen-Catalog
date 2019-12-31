import { Injectable } from '@angular/core';

import { AppConstants, HttpService } from 'smart-platform-services';


@Injectable()
export class ActionsAndDocumentsService {

    constructor(private appConstants: AppConstants, private http: HttpService) {

    }


    getTabsConfig() {
        return [{
            title: 'actions',
            isActive: true,
            icon: '#icon_ActionPlan',
            key: 'actions',
            manifestPath: 'actions/index'
        }, {
            title: 'documents',
            isActive: false,
            icon: '',
            key: 'documents',
            manifestPath: 'documents/index'
        }];
    }
}
