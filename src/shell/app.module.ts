// Framework Modules
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
// Platform Modules
import { AppConstants, SelectivePreloadingStrategy, SmartDateService, SmartPlatformServicesModule, SmartNumericService } from 'smart-platform-services';
import { CoreModule } from '../core';
import { SharedTranslateModule } from '../shared';
import { AppComponent, appRoute, HeaderContComponent, LayoutComponent, WrapperComponent } from './';
import { LayoutService } from './layout/layout.service';
import { SmartInjectorModule } from 'smart-module-injector';
import { SmartLayoutManagerModule } from 'smart-layout-manager';

//declare var UserCountryCultureInfo: any;
declare var userInfo: any;
export function _UserCountryCultureInfo(): any {
  return (<any>window).UserCountryCultureInfo;
}
declare var timeZoneOffset;
declare var icons: any;
declare var _lang: string;
//this variable is needed for localization
declare var Resources: any;

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderContComponent,
    WrapperComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    SharedTranslateModule,
    SmartPlatformServicesModule.forRoot(_UserCountryCultureInfo()),
    RouterModule.forRoot(appRoute, {
      useHash: true,
      enableTracing: true,
      preloadingStrategy: SelectivePreloadingStrategy
    }),
    SmartInjectorModule,
    SmartLayoutManagerModule
  ],
  providers: [
    DatePipe,
    LayoutService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private appConstants: AppConstants, private dateService: SmartDateService, private numericService: SmartNumericService) {
    this.appConstants.userPreferences = userInfo;
    dateService.setUserCountryCultureInfo(_UserCountryCultureInfo(), _lang);
    this.numericService.setUserCountryCultureInfo(_UserCountryCultureInfo());
    dateService.setLocaleOffset(timeZoneOffset);
  }
}
