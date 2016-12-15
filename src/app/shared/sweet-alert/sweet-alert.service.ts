import { Injectable, EventEmitter } from '@angular/core';
import { SweetAlert } from './sweet-alert';
import { SweetAlertObserverHelper } from './sweet-alert.observer';
@Injectable()
export class SweetAlertService {
    public alert(sweetAlert: SweetAlert): string {
        sweetAlert.isActive = true;
        SweetAlertObserverHelper.emitCurrent(sweetAlert);
        return sweetAlert.id;
    }

    // 订阅当前变化的sweetAlert
    public observeAlert(): EventEmitter<SweetAlert> {
        return SweetAlertObserverHelper.observeCurrent();
    }

    // 在SweetAlert点击确认或者取消之后,推入事件
    public emit(sweetAlert: SweetAlert) {
        return SweetAlertObserverHelper.emit(sweetAlert);
    }

    // 订阅SweetAlert是否确定与是否完成
    public observe(id: string): EventEmitter<SweetAlert> {
        return SweetAlertObserverHelper.observe(id);
    }
}

