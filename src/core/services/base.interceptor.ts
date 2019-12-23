import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AppConstants } from 'smart-platform-services';

@Injectable()
export class BaseInterceptService implements HttpInterceptor {
  constructor(private appConstants: AppConstants) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        "BPC": this.appConstants.userPreferences.UserBasicDetails.BuyerPartnerCode.toString(),
        "RegionID": '15',
        "Authorization": 'Bearer ' + this.appConstants.userPreferences.JWTToken,
        "Ocp-Apim-Subscription-Key": this.appConstants.userPreferences.APIMSubscriptionKey,
        'UserExecutionContext': JSON.stringify(this.appConstants.userPreferences.UserBasicDetails)
      }
    });

    return next.handle(request);
  }
}
