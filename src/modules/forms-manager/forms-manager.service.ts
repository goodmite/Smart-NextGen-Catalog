import { Injectable } from '@angular/core';

@Injectable()
export class FormsManagerService {

    constructor() {

    }


    getTileConfig(type: string) {
        let config = {};
    }


    getData() {
        return [
            { ID: 51336250003330, Name: "ENGINEERED EQUIPMENT" },
            { ID: 51336250003332, Name: "ENVIRONMENTAL SERVICES" }
        ];
    }
}
