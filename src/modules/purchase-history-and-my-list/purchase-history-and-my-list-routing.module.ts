import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';

import { PurchaseHistoryAndMyListComponent } from "./purchase-history-and-my-list.component";
import { PurchaseHistoryAndMyListService } from './purchase-history-and-my-list.service';


const purchaseHistoryAndMyListManifest: IManifestCollection = [{
  path: 'index', component: PurchaseHistoryAndMyListComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(purchaseHistoryAndMyListManifest)
  ],
  declarations: [PurchaseHistoryAndMyListComponent],
  providers: [PurchaseHistoryAndMyListService],
  entryComponents: []
})
export class PurchaseHistoryAndMyListRoutingModule {

}
