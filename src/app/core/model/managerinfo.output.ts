// 管理员信息
export class ManagerInfo {
    token: string;
    username: string;
    realname: string;
    portrait: string;
    constructor(token: string = '', username: string, realname: string, portrait: string) {
        this.token = token;
        this.username = username;
        this.realname = realname;
        this.portrait = portrait;
    }
}