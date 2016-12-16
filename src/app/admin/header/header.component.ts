import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { LocalStorageService, SessionStorageService, LocalStorage } from 'ng2-webstorage';
import { STORAGE_NAMES } from '../../core/storage.names';
import { ManagerInfo } from '../../core/model/managerinfo.output';
import { Salert, SALERT_TYPE } from '../../shared/salert/salert';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  iscollapse: boolean = false;
  isuserMenuOpen: boolean = false;
  dom: BrowserDomAdapter;
  salert: Salert;
  @LocalStorage(STORAGE_NAMES.CurrentManager)
  public currentManager: ManagerInfo;
  constructor(private router: Router, private storage: LocalStorageService) {

  }
  // 收缩
  collapse() {
    let bodyDom = this.dom.query('body');
    // 如果正在收缩,则拉伸
    if (this.iscollapse) {
      this.dom.removeClass(bodyDom, 'sidebar-collapse');
    } else {
      this.dom.addClass(bodyDom, 'sidebar-collapse');
    }
    this.iscollapse = !this.iscollapse;
  }
  // 是否开启用户菜单的样式
  setUsermenuClasses() {
    let classes = {
      'dropdown': true,
      'user': true,
      'user-menu': true,
      'open': this.isuserMenuOpen
    };
    return classes;
  }
  // 设置用户菜单是否开启
  setUsermenuOpen(): void {
    this.isuserMenuOpen = !this.isuserMenuOpen;
  }
  // 退出
  signout(): void {
    this.salert = new Salert(SALERT_TYPE.Confirm, '确定要退出吗?');
  }
  // 确定按钮
  onConfirmed(confirmed: boolean) {
    if (confirmed) {
      this.storage.clear(STORAGE_NAMES.CurrentManager);
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.dom = new BrowserDomAdapter();
    this.storage.observe(STORAGE_NAMES.CurrentManager)
      .subscribe((x) => {
        if (x === null) {
          this.storage.clear();
          this.navigateToLogin();
        }
      });
  }

}
