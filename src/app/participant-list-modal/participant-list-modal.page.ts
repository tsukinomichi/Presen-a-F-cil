import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-participant-list-modal',
  templateUrl: './participant-list-modal.page.html',
  styleUrls: ['./participant-list-modal.page.scss']
})
export class ParticipantListModalPage implements OnInit {
  @Input() eventId!: string;
  participants: any[] = [];

  constructor(
    private modalController: ModalController,
    private eventService: EventService
  ) {}

  ngOnInit() {
    if (this.eventId) {
      this.loadParticipants();
    }
  }

  loadParticipants() {
    this.eventService.getParticipants(this.eventId).subscribe((participants) => {
      this.participants = participants;
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
