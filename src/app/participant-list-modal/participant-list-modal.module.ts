import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantListModalPageRoutingModule } from './participant-list-modal-routing.module';

import { ParticipantListModalPage } from './participant-list-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantListModalPageRoutingModule
  ],
  declarations: [ParticipantListModalPage]
})
export class ParticipantListModalPageModule {}
