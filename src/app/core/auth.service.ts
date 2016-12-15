import { Injectable } from '@angular/core';
import { AuthInput } from './model/auth.input';
import { ManagerInfo } from './model/managerinfo.output';
@Injectable()
export class AuthService {

    constructor() { }
    // 登录,认证
    auth(authinput: AuthInput): ManagerInfo {
        return new ManagerInfo('token', 'Admin', '管理员');
    }
}
