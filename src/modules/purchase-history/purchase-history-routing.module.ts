import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PurchaseHistoryComponent } from "./purchase-history.component";
import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';

const purchaseHistoryManifest: IManifestCollection = [{
  path: 'index', component: PurchaseHistoryComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(purchaseHistoryManifest)
  ],
  declarations: [PurchaseHistoryComponent],
  providers: [],
  entryComponents: []
})
export class PurchaseHistoryRoutingModule {

}
