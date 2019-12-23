import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CategoryPopupComponent } from "./category-popup.component";

import { SmartTreeModule } from 'smart-tree';
import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';


const categoryPopupManifest: IManifestCollection = [{
  path: 'index', component: CategoryPopupComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(categoryPopupManifest),
    SmartTreeModule
  ],
  declarations: [CategoryPopupComponent],
  providers: [],
  entryComponents: []
})
export class CategoryPopupModule {

}
