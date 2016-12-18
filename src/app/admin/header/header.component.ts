import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { LocalStorageService, SessionStorageService, LocalStorage } from 'ng2-webstorage';
import { STORAGE_NAMES } from '../../core/storage.names';
import { SweetAlert, ALERT_TYPE } from '../../shared/sweet-alert/sweet-alert';
import { SweetAlertService } from '../../shared/sweet-alert/sweet-alert.service';
import { ManagerInfo } from '../../core/model/managerinfo.output';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  iscollapse: boolean = false;
  isuserMenuOpen: boolean = false;
  dom: BrowserDomAdapter;
  @LocalStorage(STORAGE_NAMES.CurrentManager)
  public currentManager: ManagerInfo;
  constructor(private router: Router, private storage: LocalStorageService, private sweetAlertService: SweetAlertService) {

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
    let sweetAlert = new SweetAlert(ALERT_TYPE.Confirm, '确定要退出吗?');
    this.sweetAlertService.alert(sweetAlert);
  }
  // // 确定按钮
  // onConfirmed(confirmed: boolean) {
  //   if (confirmed) {
  //     this.storage.clear(STORAGE_NAMES.CurrentManager);
  //   }
  // }

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
