import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';

import { FormsManagerComponent } from "./forms-manager.component";
import { FormsManagerService } from "./forms-manager.service";


const formsManagerManifest: IManifestCollection = [{
  path: 'index', component: FormsManagerComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(formsManagerManifest)
  ],
  declarations: [FormsManagerComponent],
  providers: [FormsManagerService],
  entryComponents: []
})
export class FormsManagerRoutingModule {

}
