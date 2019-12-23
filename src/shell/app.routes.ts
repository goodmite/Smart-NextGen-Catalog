import { Routes } from '@angular/router';
import { HeaderContComponent, LayoutComponent, WrapperComponent } from '.';

export const appRoute: Routes = [
  { path: '', redirectTo: 'landing/index', pathMatch: 'full' },
  {
    path: 'landing',
    component: HeaderContComponent,
    children: [{
      path: 'index',
      component: LayoutComponent
    }]
  }
];
