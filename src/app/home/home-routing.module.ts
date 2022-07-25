import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'home',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
          }
        ] 
      },
      {
        path:'info',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/info/info.module').then(m => m.InfoPageModule)
          }
        ] 
      },
      {
        path:'notif',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/notif/notif.module').then(m => m.NotifPageModule)
          }
        ] 
      },
      {
        path:'dtls',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages//home/dtls/dtls.module').then(m => m.DtlsPageModule)
          }
        ] 
      },
      {
        path:'message',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages//home/message/message.module').then(m => m.MessagePageModule)
          }
        ] 
      },
      {
        path:'report',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages//home/report/report.module').then(m => m.ReportPageModule)
          }
        ] 
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
