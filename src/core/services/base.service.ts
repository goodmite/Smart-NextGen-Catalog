import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { of } from "rxjs/observable/of";
import { catchError, tap } from 'rxjs/operators';
import { LoggerService } from './logger.service';
declare var userInfo: any;

@Injectable()
export class BaseService {

	constructor(private httpClient: HttpClient, private loggerService: LoggerService) { }

	postData(url: string, data: any, headers: any, params?: any): Observable<any> {
		const httpOptions = {
			headers: headers
		};
		if (params) {
			httpOptions['params'] = params;
		}

		return this.httpClient.post<any>(url, data, httpOptions).pipe(
			tap((d: any) => this.loggerService.info('baseService postData get called.')),
			catchError(this.handleError<any>('base service post', 'error'))
		);
	}

	getData(url: string, headers: any, params?: any, responseType?: 'arraybuffer' | 'blob' | 'json' | 'text'): Observable<any> {
		let httpOptions = {};

		httpOptions['headers'] = headers

		params && (httpOptions['params'] = params);

		responseType && (httpOptions['responseType'] = responseType);

		let data: any;

		return this.httpClient.get(url, httpOptions).pipe(
			tap((response: any) => { data = response, this.loggerService.info("baseService get data returned.") }),
			catchError(this.handleError<any>('base service get', 'error')));
	};

	deleteData(url: string, headers: any, params?: any): Observable<any> {
		Object.assign(headers, {
			"Ocp-Apim-Subscription-Key": userInfo.SCAPIMSubKey, "BPC": userInfo.EncryptedBPC
		});
		let header = new HttpHeaders(headers);

		const httpOptions = {
			headers: headers
		};

		if (params) {
			httpOptions['params'] = params;
		}
		return this.httpClient.delete<any>(url, httpOptions).pipe(
			tap(_ => this.loggerService.info('baseService deleted the data')),
			catchError(this.handleError<any>('base service delete', 'error'))
		);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			this.loggerService.error(error); // log to console instead
			// Let the app keep running by returning an empty result.
			return of(result as T);
		}
	};

	postMethod(url: string, data: any, headers: any): Observable<any> {
		let header = new HttpHeaders(headers);

		const httpOptions = {
			headers: headers
		};

		return this.httpClient.post<any>(url, data, httpOptions).pipe(
			tap((d: any) => this.loggerService.info('baseService postData get called.')),
			catchError(this.handleError<any>('base service post', 'error'))
		);
	}
}
