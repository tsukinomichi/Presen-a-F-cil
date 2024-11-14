import { Component, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss']
})
export class ModalPagePage {
  @Input() eventId!: string;
  participant = {
    nomeCompleto: '',
    numeroTelefone: ''
  };

  constructor(
    private modalController: ModalController,
    private eventService: EventService,
    private toastController: ToastController
  ) {}

  async onSubmit() {
    if (this.eventId && this.participant.nomeCompleto && this.participant.numeroTelefone) {
      try {
        await this.eventService.addParticipant(this.eventId, this.participant);
        this.showSuccessMessage();
        this.dismissModal();
      } catch (error) {
        console.error('Erro ao cadastrar participante:', error);
      }
    }
  }

  async showSuccessMessage() {
    const toast = await this.toastController.create({
      message: 'Seu cadastro foi efetuado com sucesso!',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
