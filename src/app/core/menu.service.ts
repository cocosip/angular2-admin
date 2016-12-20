import { Injectable } from '@angular/core';
import { SidebarMenu, Menu } from './model/sidebar-menu.output';
@Injectable()
export class MenuService {
    public getSidebarMenus(): SidebarMenu {
        let sidebarMenu = new SidebarMenu();
        let menu1 = new Menu(1, 0, 1, '菜单1', '', true, 'fa fa-dashboard');
        let menu1_1 = new Menu(11, 1, 1, '菜单1-1', 'dashboard', false);
        let menu1_2 = new Menu(12, 1, 2, '菜单1-2', 'dashboard2', false);

        let menu2 = new Menu(2, 0, 2, '菜单2', '', true, 'fa fa-dashboard');
        let menu2_1 = new Menu(21, 2, 1, '菜单2-1', 'dashboard3', false);
        let menu2_2 = new Menu(22, 2, 2, '菜单2-2', 'dashboard4', false);
        sidebarMenu.addMenu(menu1);
        sidebarMenu.addMenu(menu1_1);
        sidebarMenu.addMenu(menu1_2);
        sidebarMenu.addMenu(menu2);
        sidebarMenu.addMenu(menu2_1);
        sidebarMenu.addMenu(menu2_2);
        return sidebarMenu;
    }
}
