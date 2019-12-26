import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';

import { ActionsAndDocumentsComponent } from "./actions-and-documents.component";
import { ActionsAndDocumentsService } from './actions-and-documents.service';


const actionsAndDocumentsManifest: IManifestCollection = [{
  path: 'index', component: ActionsAndDocumentsComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(actionsAndDocumentsManifest)
  ],
  declarations: [ActionsAndDocumentsComponent],
  providers: [ActionsAndDocumentsService],
  entryComponents: []
})
export class ActionsAndDocumentsRoutingModule {

}
