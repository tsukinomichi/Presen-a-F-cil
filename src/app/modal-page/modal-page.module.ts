import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Certifique-se de que está importado
import { ModalPagePage } from './modal-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule // Adicione IonicModule aqui
  ],
  declarations: [ModalPagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Adiciona suporte para elementos personalizados
})
export class ModalPagePageModule {}
