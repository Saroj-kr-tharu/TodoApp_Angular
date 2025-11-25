import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        loadComponent: () => {
            return import('./Pages/homecomponent/homecomponent').then( (m) => m.Homecomponent )
        }
    }, 
    {
        path:'home',
        loadComponent: () => {
            return import('./Pages/homecomponent/homecomponent').then( (m) => 
            m.Homecomponent  )
        }
    },
    {
        path:'login',
        loadComponent: () => {
            return import('./Pages/login/logincomponent').then( (m) => 
            m.Logincomponent  )
        }
    },
    {
        path:'signup',
        loadComponent: () => {
            return import('./Pages/signupcomponent/signupcomponent').then( (m) => 
            m.Signupcomponent  )
        }
    },
    {
        path:'todos',
        loadComponent: () => {
            return import('./Pages/todos/todos-component').then( (m) => 
            m.TodosComponent  )
        }
    }
];
