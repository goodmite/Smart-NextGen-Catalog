import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

@Injectable()
export class ConsoleLoggerService implements Logger {

    get info() {
        return console.info.bind(console);
    }

    get debug() {
        return console.debug.bind(console);
    }

    get error() {
        return console.error.bind(console);
    }
}