import { OnInit } from '@angular/core';
// 导航菜单
export class SidebarMenu {
    public menus: Array<Menu> = new Array<Menu>();
    // 判断某个菜单是否为子菜单
    public isLeaf(menu: Menu): boolean {
        let childMenus = this.menus.filter(x => x.parentId === menu.id);
        return childMenus.length <= 0;
    }
    // 获取一级目录
    public getLevelMenus() {
        return this.menus.filter(x => x.parentId === 0);
    }

    public getChildMenus(menu: Menu): Array<Menu> {
        return this.menus.filter(x => x.parentId === menu.id);
    }

    // 获取兄弟菜单
    public getBrotherMenus(menu: Menu): Array<Menu> {
        return this.menus.filter(x => x.parentId === menu.parentId && x.id !== menu.id);
    }

    // 添加菜单
    public addMenu(menu: Menu) {
        this.menus.push(menu);
    }

    // 添加菜单
    public addMenus(menus: Array<Menu>) {
        this.menus.concat(menus);
    }
}

// 菜单
export class Menu {
    id: any; // 当前id
    parentId: any; // 父级id
    sort: any; // 排序
    name: string; // 菜单名称
    routePath: string; // 路由
    isActive: boolean; // 是否展开
    icon: string; // icon图标
    constructor(id: any, parentId: any, sort: any, name: string, routePath: string, isActive = false, icon = 'fa fa-circle-o') {
        this.id = id;
        this.parentId = parentId;
        this.sort = sort;
        this.name = name;
        this.routePath = routePath;
        this.isActive = isActive;
        this.icon = icon;
    }

    activeMenu() {
        this.isActive = !this.isActive;
    }
}

