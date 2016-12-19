import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { STORAGE_NAMES } from '../../core/storage.names';
import { ManagerInfo } from '../../core/model/managerinfo.output';
import { SidebarMenu, Menu } from '../../core/model/sidebar-menu.output';
import { MenuService } from '../../core/menu.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [MenuService]
})
export class SidebarComponent implements OnInit {
  currentManager: ManagerInfo;
  sidebarMenu: SidebarMenu;
  route: ActivatedRoute;
  constructor(private router: Router, route: ActivatedRoute, private storage: LocalStorageService, private menuService: MenuService) {
  }

  // 菜单是否展开样式
  setMenuActiveClasses(menu: Menu) {
    let classes = {
      'active': menu.isActive,
      'treeview': true
    };
    return classes;
  }
  // 菜单是否展开
  activeMenu(menu: Menu) {
    if (!this.sidebarMenu.isLeaf(menu)) {
      menu.activeMenu();
    }
  }

  ngOnInit() {
    this.currentManager = this.storage.retrieve(STORAGE_NAMES.CurrentManager);
    // breadcrumb

    // 菜单
    this.sidebarMenu = this.menuService.getSidebarMenus();
  }

}
