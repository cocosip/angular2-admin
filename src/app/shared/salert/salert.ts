
export const SALERT_TYPE = {
    Success: 'success',
    Warn: 'warn',
    Info: 'info',
    Error: 'error',
    Confirm: 'confirm'
}
export class Salert {
    public isActive = false;
    public title = '';
    public message = '';
    public salertType = '';
    constructor(salertType: string, message: string) {
        this.isActive = true;
        this.salertType = salertType;
        switch (salertType) {
            case SALERT_TYPE.Success: this.title = 'Success';
                break;
            case SALERT_TYPE.Error: this.title = 'Error';
                break;
            case SALERT_TYPE.Info: this.title = 'Info';
                break;
            case SALERT_TYPE.Warn: this.title = 'Warn';
                break;
            case SALERT_TYPE.Confirm: this.title = 'Are you sure?';
                break;
        }
        this.message = message;
    }
}
