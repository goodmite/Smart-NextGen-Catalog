import { Injectable } from '@angular/core';

@Injectable()
export class LayoutService {
    private dataModel; any;


    constructor() {

    }


    setDataModel(tmpDataModel: any) {
        this.dataModel = tmpDataModel;
    }


    getDataModel() {
        return this.dataModel;
    }


    updateDataDataModel(tmpData: any) {
        for (let key in tmpData) {
            this.dataModel[key] = tmpData[key];
        }
    }
}
