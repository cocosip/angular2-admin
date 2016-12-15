// 管理员信息
export class ManagerInfo {
    token: string;
    username: string;
    realname: string;
    constructor(token: string = '', username: string, realname: string) {
        this.token = token;
        this.username = username;
        this.realname = realname;
    }
}