import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { TestPageComponent } from './routers/test-page/test-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { CreateBrandPageComponent } from './routers/create-brand-page/create-brand-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home' //herhangibir şey yoksa home pathine yolla
  },
  {
    path: 'home', //  /home
    //pathMatch: 'prefix', //default olarak prefix zaten
    //component: HomePageComponent, //layout yapmak için
    component: MainLayoutComponent, //home ve altındaki sayfalar için, çalışması için html'ine router-outlet ekleriz
    children: [
      {
        path: 'models', // /home/models
        component: HomePageComponent
      },
      {
        path: 'brands',
        component: HomePageComponent
      }
    ]
  },
  {
    path: 'layout-test',
    component: TestPageComponent,
  },
  {
    path:'brands/create',
    component: CreateBrandPageComponent
  },
  {
    path: '**', // her path'de çalışır, En sona yazılmalı
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent
  }
];
