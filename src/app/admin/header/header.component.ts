import { Component, OnInit } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { STORAGE_NAMES } from '../../core/storage.names';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  iscollapse: boolean = false;
  isuserMenuOpen: boolean = false;
  dom: BrowserDomAdapter;
  //currentManager:ManagerInfo;
  constructor(private storage: LocalStorageService) {

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


  ngOnInit() {
    this.dom = new BrowserDomAdapter();
    this.storage.retrieve(STORAGE_NAMES.CurrentManager);
  }

}
