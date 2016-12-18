import { EventEmitter } from '@angular/core';
import { SweetAlert } from './sweet-alert';
export class SweetAlertObserverHelper {
    static currentObservers: Object = {};
    static observers: Object = {};

    static observeCurrent(): EventEmitter<SweetAlert> {
        let key = 'currentAlert';
        if (key in this.observers) {
            return this.observers[key];
        }
        return this.observers[key] = new EventEmitter<SweetAlert>();
    }

    static emitCurrent(sweetAlert: SweetAlert) {
        let key = 'currentAlert';
        if (key in this.observers) {
            this.observers[key].emit(sweetAlert);
        }
    }

    static observe(key: string): EventEmitter<SweetAlert> {
        if (key in this.observers) {
            return this.observers[key];
        }
        return this.observers[key] = new EventEmitter<SweetAlert>();
    }

    static emit(sweetAlert: SweetAlert) {
        if (sweetAlert.id in this.observers) {
            this.observers[sweetAlert.id].emit(sweetAlert);
        }
    }
}