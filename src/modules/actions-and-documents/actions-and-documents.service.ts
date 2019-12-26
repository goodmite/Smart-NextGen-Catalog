import { Injectable } from '@angular/core';

import { AppConstants, HttpService } from 'smart-platform-services';


@Injectable()
export class ActionsAndDocumentsService {

    constructor(private appConstants: AppConstants, private http: HttpService) {

    }


    getData() {
        return [{
            ID: 1,
            Name: 'cat 1'
        }, {
            ID: 2,
            Name: 'cat 2'
        }];
    }
}
