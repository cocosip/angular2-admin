import { Component, OnInit } from '@angular/core';
import { SweetAlert, ALERT_TYPE } from './sweet-alert';
import { SweetAlertService } from './sweet-alert.service';
@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.css']
})
export class SweetAlertComponent implements OnInit {
  sweetAlert: SweetAlert = new SweetAlert(ALERT_TYPE.Info, 'SweetAlert Init Success!');
  constructor(private sweetAlertService: SweetAlertService) {

  }

  complete() {
    this.sweetAlert.isComplete = true;
    this.sweetAlert.isActive = false;
    this.sweetAlertService.emit(this.sweetAlert);
  }
  confirm(result: boolean) {
    this.sweetAlert.confirmResult = result;
    this.complete();
  }

  ngOnInit() {
    // 订阅当前SweetAlert的变化
    this.sweetAlertService.observeAlert().subscribe(x => this.sweetAlert = x);
  }

}
