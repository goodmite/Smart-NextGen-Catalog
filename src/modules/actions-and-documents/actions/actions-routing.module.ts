import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';

import { ActionsComponent } from './actions.component';
import { ActionItemRendererComponent } from './action-item-renderer/action-item-renderer.component';
import { ActionsService } from './actions.service';


const actionsManifest: IManifestCollection = [{
  path: 'index', component: ActionsComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(actionsManifest)
  ],
  declarations: [ActionsComponent, ActionItemRendererComponent],
  providers: [ActionsService],
  entryComponents: []
})
export class ActionsRoutingModule {

}