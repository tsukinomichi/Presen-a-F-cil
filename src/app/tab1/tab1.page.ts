import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { ParticipantListModalPage } from '../participant-list-modal/participant-list-modal.page';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  events: any[] = [];

  constructor(
    private modalController: ModalController,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  // Abre o modal para exibir a lista de participantes
  async lista(eventId: string) {
    const modal = await this.modalController.create({
      component: ParticipantListModalPage,
      cssClass: 'custom-modal-class',
      componentProps: { eventId }
    });
    await modal.present();
  }

  // Abre o modal para cadastrar um novo participante
  async presenca(eventId: string) {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      cssClass: 'custom-modal-class',
      componentProps: { eventId }
    });
    await modal.present();
  }
}
