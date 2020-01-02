import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SmartInjectorModule, IManifestCollection } from 'smart-module-injector';

import { PurchaseHistoryComponent } from './purchase-history.component';
import { PurchaseHistoryItemRendererComponent } from './purchase-history-item-renderer/purchase-history-item-renderer.component';
import { PurchaseHistoryService } from './purchase-history.service';


const purchaseHistoryManifest: IManifestCollection = [{
  path: 'index', component: PurchaseHistoryComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SmartInjectorModule.forChild(purchaseHistoryManifest)
  ],
  declarations: [PurchaseHistoryComponent, PurchaseHistoryItemRendererComponent],
  providers: [PurchaseHistoryService],
  entryComponents: []
})
export class PurchaseHistoryRoutingModule {

}
