import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModalPagePageModule } from './modal-page/modal-page.module'; // Verifique se o nome é correto



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal-page/modal-page.module').then(m => m.ModalPagePageModule) 
  },
  {
    path: 'participant-list-modal',
    loadChildren: () => import('./participant-list-modal/participant-list-modal.module').then( m => m.ParticipantListModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
