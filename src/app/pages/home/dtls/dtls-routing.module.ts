import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DtlsPage } from './dtls.page';

const routes: Routes = [
  {
    path: '',
    component: DtlsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DtlsPageRoutingModule {}
