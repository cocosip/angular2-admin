import { Component, OnInit, trigger, state, style, transition, animate, AnimationTransitionEvent } from '@angular/core';
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
  providers: [MenuService],
  animations: [
    trigger('menuActiveState', [
      state('inactive', style({
        'display': 'none',
        'height': '0',
        'overflow': 'hidden'
       })),
      state('active', style({
        'display': 'block',
        'height': '*',
        'overflow': 'hidden'
      })),
      transition('inactive => active', animate('400ms ease-in ')),
      transition('active => inactive', animate('400ms ease-out '))
    ])]
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
      'treeview': true,
      'active': menu.isActive
    };
    return classes;
  }
  // 菜单是否展开
  activeMenu(menu: Menu) {
    if (!this.sidebarMenu.isLeaf(menu)) {
      menu.activeMenu();
    }
  }
  // 获取是否活动的菜单状态
  getActiveState(menu: Menu) {
    if (menu.isActive) {
      return 'active';
    }
    return 'inactive';
  }
  // 动画完成之后的效果
  animationDone(evnt: AnimationTransitionEvent) {

  }
  ngOnInit() {
    this.currentManager = this.storage.retrieve(STORAGE_NAMES.CurrentManager);
    // breadcrumb

    // 菜单
    this.sidebarMenu = this.menuService.getSidebarMenus();
  }

}
