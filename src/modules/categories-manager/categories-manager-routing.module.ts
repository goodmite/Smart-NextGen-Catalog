import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';

import { CategoriesManagerComponent } from "./categories-manager.component";
import { CategoriesManagerService } from "./categories-manager.service";


const categoriesManagerManifest: IManifestCollection = [{
  path: 'index', component: CategoriesManagerComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(categoriesManagerManifest)
  ],
  declarations: [CategoriesManagerComponent],
  providers: [CategoriesManagerService],
  entryComponents: []
})
export class CategoriesManagerRoutingModule {

}
