import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
    dom: BrowserDomAdapter;
    constructor(private router: Router) {

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
        this.router.navigate(['/admin']);
    }


}
