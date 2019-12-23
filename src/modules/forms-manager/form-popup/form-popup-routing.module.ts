import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FormPopupComponent } from "./form-popup.component";

import { SmartTreeModule } from 'smart-tree';
import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';


const formPopupManifest: IManifestCollection = [{
  path: 'index', component: FormPopupComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(formPopupManifest),
    SmartTreeModule
  ],
  declarations: [FormPopupComponent],
  providers: [],
  entryComponents: []
})
export class FormPopupModule {

}
