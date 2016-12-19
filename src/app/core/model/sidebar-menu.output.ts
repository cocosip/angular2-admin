import { OnInit } from '@angular/core';
// 导航菜单
export class SidebarMenu implements OnInit {
    menus: Array<Menu>;
    // 判断某个菜单是否为子菜单
    isLeaf(menu: Menu): boolean {
        let childMenus = this.menus.filter(x => x.parentId === menu.id);
        return childMenus.length > 0;
    }
    // 获取一级目录
    getLevelMenus() {
        return this.menus.filter(x => x.parentId === 0);
    }

    getChildMenus(menu: Menu) {
        return this.menus.filter(x => x.parentId === menu.id);
    }


    ngOnInit() {
        this.menus = new Array<Menu>();
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
    constructor(id: any, parentId: any, sort: any, name: string, routePath: string, isActive = false, icon = '') {
        this.id = id;
        this.parentId = parentId;
        this.sort = sort;
        this.name = name;
        this.routePath = routePath;
        this.isActive = isActive;
        this.icon = icon;
    }
}

