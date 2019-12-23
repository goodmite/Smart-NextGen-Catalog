import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ActionItemsComponent } from "./action-items.component";
import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';

const actionItemsManifest: IManifestCollection = [{
  path: 'index', component: ActionItemsComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(actionItemsManifest)
  ],
  declarations: [ActionItemsComponent],
  providers: [],
  entryComponents: []
})
export class ActionItemsRoutingModule {

}
