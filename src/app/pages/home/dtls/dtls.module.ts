import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DtlsPageRoutingModule } from './dtls-routing.module';

import { DtlsPage } from './dtls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DtlsPageRoutingModule
  ],
  declarations: [DtlsPage]
})
export class DtlsPageModule {}
