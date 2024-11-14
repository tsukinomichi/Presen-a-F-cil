import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantListModalPage } from './participant-list-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantListModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantListModalPageRoutingModule {}
