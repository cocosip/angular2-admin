import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Ng2Webstorage } from 'ng2-webstorage';
import { UtilityModule } from './utility/utility.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AdminRoutingModule } from './admin/admin-routing/admin-routing.module';
import { AdminModule } from './admin/admin.module';
// 组件
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: SignInComponent },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];
@NgModule({
    declarations: [
        AppComponent,
        SignInComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        Ng2Webstorage,
        UtilityModule,
        SharedModule,
        CoreModule,
        AdminRoutingModule,
        AdminModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
