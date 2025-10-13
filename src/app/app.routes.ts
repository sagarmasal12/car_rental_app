import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Vehicles } from './pages/vehicles/vehicles';
import { Booking } from './pages/booking/booking';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


export const routes: Routes = [
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"

    },
    {
        path:"login",
        component:Login
    },
    {
        path:"",
        component:Layout,
        children:[
            
            {
                path:"vehicles",
                component:Vehicles
            },
            {
                path:"booking",
                component:Booking
            },
            {
                path:"dashboard",
                component:Dashboard
            }
        ]
    }
];
