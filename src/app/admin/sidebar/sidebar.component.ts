import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { STORAGE_NAMES } from '../../core/storage.names';
import { ManagerInfo } from '../../core/model/managerinfo.output';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentManager: ManagerInfo;
  route: ActivatedRoute;
  constructor(private router: Router, private storage: LocalStorageService, route: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentManager = this.storage.retrieve(STORAGE_NAMES.CurrentManager);
    // breadcrumb
  }

}
