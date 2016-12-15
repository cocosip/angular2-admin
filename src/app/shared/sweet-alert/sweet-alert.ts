import { Guid } from '../../utility/guid';
export const ALERT_TYPE = {
    Success: 'success',
    Warn: 'warn',
    Info: 'info',
    Error: 'error',
    Confirm: 'confirm'
};
export class SweetAlert {
    public id: string;
    public isActive = false;
    public title = '';
    public message = '';
    public alertType = '';
    public isComplete: boolean = false; // 是否已经完成,代表能否执行下一步
    public confirmResult: boolean = false;
    // 是否是Confirm类型
    public get isConfirm(): boolean {
        return this.alertType === ALERT_TYPE.Confirm;
    }
    // 是否为Error类型
    public get isError(): boolean {
        return this.alertType === ALERT_TYPE.Error;
    }

    public get isSuccess(): boolean {
        return this.alertType === ALERT_TYPE.Success;
    }

    constructor(alertType: string, message: string) {
        this.id = Guid.newId();
        this.alertType = alertType;
        switch (alertType) {
            case ALERT_TYPE.Success: this.title = 'Success';
                break;
            case ALERT_TYPE.Error: this.title = 'Error';
                break;
            case ALERT_TYPE.Info: this.title = 'Info';
                break;
            case ALERT_TYPE.Warn: this.title = 'Warn';
                break;
            case ALERT_TYPE.Confirm: this.title = 'Are you sure?';
                break;
        }
        this.message = message;
    }
}
