import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() { }

  getCurrentUser(): User {
    let user = new User(1, 'Admin', '15868702117');
    user.realname = '管理员';
    user.portrait = 'assets/img/user-13.jpg';
    return user;
  }
}

export class User {
  id: any;
  username: string;
  mobile: string;
  realname: string;
  portrait: string;
  constructor(id: any, username: string, mobile: string) {
    this.id = id;
    this.username = username;
    this.mobile = mobile;
  }

}
