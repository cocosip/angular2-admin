import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<BreadcrumbItem>;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.breadcrumbs.push(new BreadcrumbItem(this.route.outlet, this.route.outlet, this.isHome(this.route), true));
    this.getTreeRoute(this.route);
    this.breadcrumbs.reverse();
  }

  isHome(activeRoute: ActivatedRoute): boolean {
    return activeRoute.outlet === 'home';
  }

  getOutlet(activeRoute: ActivatedRoute) {
    return '' + activeRoute.outlet;
  }

  private getTreeRoute(activeRoute: ActivatedRoute) {
    if (activeRoute.parent != null && activeRoute.parent !== activeRoute.root) {
      this.getTreeRoute(activeRoute.parent);
    }
  }

}

export class BreadcrumbItem {
  name: string;
  outlet: string;
  isHome: boolean;
  isLeaf: boolean;
  constructor(name: string, outlet: string, isHome = false, isLeaf = false) {
    this.name = name;
    this.outlet = outlet;
    this.isHome = isHome;
    this.isLeaf = false;
  }
}
