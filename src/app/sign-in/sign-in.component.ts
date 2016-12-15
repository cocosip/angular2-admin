import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { AuthService } from '../core/auth.service';
import { AuthInput } from '../core/model/auth.input';
import { STORAGE_NAMES } from '../core/storage.names';
@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css'],
    providers: [AuthService]
})
export class SignInComponent implements OnInit, OnDestroy {
    dom: BrowserDomAdapter;
    constructor(private router: Router, private storage: LocalStorageService, private authService: AuthService) {

    }

    ngOnInit() {
        this.dom = new BrowserDomAdapter();
        let bodyDom = this.dom.query('body');
        this.dom.removeClass(bodyDom, 'sidebar-mini');
        this.dom.removeClass(bodyDom, 'skin-blue');
        this.dom.addClass(bodyDom, 'login-page');
    }

    ngOnDestroy() {
        let bodyDom = this.dom.query('body');
        this.dom.removeClass(bodyDom, 'login-page');
        this.dom.addClass(bodyDom, 'sidebar-mini');
        this.dom.addClass(bodyDom, 'skin-blue');
    }

    signIn() {
        let managerInfo = this.authService.auth(new AuthInput('admin', '123456'));
        this.storage.store(STORAGE_NAMES.CurrentManager, managerInfo);
        this.router.navigate(['/admin']);
    }


}
