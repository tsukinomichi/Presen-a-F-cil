// event.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private firestore: AngularFirestore) {}

  // Função para obter a lista de eventos
  getEvents(): Observable<any[]> {
    return this.firestore.collection('events').valueChanges({ idField: 'id' });
  }

  // Função para obter a lista de participantes de um evento específico
  getParticipants(eventId: string): Observable<any[]> {
    return this.firestore
      .collection('events')
      .doc(eventId)
      .collection('participants')
      .valueChanges();
  }

  // Função para adicionar um participante a um evento específico
  addParticipant(eventId: string, participant: any): Promise<void> {
    const participantId = this.firestore.createId();
    return this.firestore
      .collection('events')
      .doc(eventId)
      .collection('participants')
      .doc(participantId)
      .set(participant);
  }
}
