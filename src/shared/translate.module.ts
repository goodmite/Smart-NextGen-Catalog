import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SmartPlatformServicesModule, AppConstants } from 'smart-platform-services'
import * as _ from 'lodash';

declare var userInfo: any;

@NgModule({
  imports: [CommonModule, TranslateModule.forRoot(), SmartPlatformServicesModule],
  providers: [TranslateService],
  exports: [TranslateModule]

})
export class SharedTranslateModule {

  constructor(private appConstants: AppConstants, private translate: TranslateService) {
    //this.appConstants.userPreferences = userInfo;

    var Resources = {};
    if (eval("typeof Resources$" + userInfo.UserBasicDetails.Culture.replace("-", "_")) !== 'undefined') {
      _.each(eval("Resources$" + userInfo.UserBasicDetails.Culture.replace("-", "_")), function (item, index, list) {
        Resources = _.extend(Resources, item);
      });
    }
    this.translate.setTranslation(userInfo.UserBasicDetails.Culture, Resources);
    this.translate.use(userInfo.UserBasicDetails.Culture);

  }

}
