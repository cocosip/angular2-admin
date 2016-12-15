import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
  }

}
