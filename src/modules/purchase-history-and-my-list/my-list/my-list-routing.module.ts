import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';

import { MyListComponent } from "./my-list.component";
import { MyListService } from './my-list.service';


const myListManifest: IManifestCollection = [{
  path: 'index', component: MyListComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(myListManifest)
  ],
  declarations: [MyListComponent],
  providers: [MyListService],
  entryComponents: []
})
export class MyListRoutingModule {

}
