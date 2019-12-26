import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';

import { DocumentsComponent } from "./documents.component";
import { DocumentsService } from './documents.service';


const documentsManifest: IManifestCollection = [{
  path: 'index', component: DocumentsComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(documentsManifest)
  ],
  declarations: [DocumentsComponent],
  providers: [DocumentsService],
  entryComponents: []
})
export class DocumentsRoutingModule {

}
