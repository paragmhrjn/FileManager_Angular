import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './Component/main/body';
import {AuthGuard} from './auth/auth.guard';
import { LoginComponent } from './Component/login';
import { RegisterComponent } from './Component/register';

const routes: Routes = [
    { path: '', component: BodyComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
