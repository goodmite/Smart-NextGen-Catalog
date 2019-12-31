import { Injectable } from '@angular/core';

import { AppConstants, HttpService } from 'smart-platform-services';


@Injectable()
export class PurchaseHistoryAndMyListService {

    constructor(private appConstants: AppConstants, private http: HttpService) {

    }


    getTabsConfig() {
        return [{
            title: 'Purchase History',
            isActive: true,
            icon: '',
            key: 'purchaseHistory',
            manifestPath: 'purchaseHistory/index'
        }, {
            title: 'My List',
            isActive: false,
            icon: '#icon_ActionPlan',
            key: 'myList',
            manifestPath: 'myList/index'
        }];
    }
}
