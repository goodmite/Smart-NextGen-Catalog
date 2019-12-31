import { Injectable } from '@angular/core';

import { AppConstants, HttpService } from 'smart-platform-services';


@Injectable()
export class CategoriesManagerService {

    constructor(private appConstants: AppConstants, private http: HttpService) {

    }


    getData() {
        return [
            { ID: 51336250003328, Name: "CATERING AND FACILITY MANAGEMENT" },
            { ID: 51336250003794, Name: "CHEM,CATALYSTS&GASES" }
        ];

        // var request = {
        //     method: 'POST',
        //     data: {
        //         contactCode: this.appConstants.userPreferences.UserBasicDetails.ContactCode,
        //         pageIndex: 0,
        //         pageSize: 0
        //     },
        //     url: this.appConstants.userPreferences.URLs.AppURL + '/Controls/GetCategories'
        // };

        // this.http.directhttp(request).then((response: any) => {
        //     if (response && response.length > 0) {
        //         return [{
        //             ID: 1,
        //             Name: 'cat 1'
        //         }, {
        //             ID: 2,
        //             Name: 'cat 2'
        //         }];
        //     }
        //     return [];
        // }, (error: any) => {
        //     console.log(error)
        // });
    }
}
