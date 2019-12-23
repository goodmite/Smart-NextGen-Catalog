import { Injectable } from '@angular/core';

export abstract class Logger {

  info: any;
  debug: any;
  error: any;
}

@Injectable()
export class LoggerService implements Logger {

  info: any;
  debug: any;
  error: any;
}
