import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit() {

    }

    signIn() {
        this.router.navigate(['/admin']);
    }


}
