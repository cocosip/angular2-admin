import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { STORAGE_NAMES } from '../../core/storage.names';
import { ManagerInfo } from '../../core/model/managerinfo.output';
import { SidebarMenu, Menu } from '../../core/model/sidebar-menu.output';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentManager: ManagerInfo;
  sidebarMenu: SidebarMenu;
  route: ActivatedRoute;
  constructor(private router: Router, private storage: LocalStorageService, route: ActivatedRoute) {
  }

  // 菜单是否展开样式
  setMenuActiveClasses(menu: Menu) {
    let classes = {
      'active': menu.isActive,
      'treeview': true
    };
    return classes;
  }

  ngOnInit() {
    this.currentManager = this.storage.retrieve(STORAGE_NAMES.CurrentManager);
    // breadcrumb

    // 菜单

  }

}
