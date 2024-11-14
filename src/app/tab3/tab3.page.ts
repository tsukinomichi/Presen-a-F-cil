import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  events$: Observable<any[]> | null = null; // Define como Observable ou null

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    // Inicializar 'events$' para buscar os eventos do Firestore
    this.events$ = this.firestore.collection('events').valueChanges({ idField: 'id' });
  }

  // Função para adicionar eventos aleatórios ao Firestore (chame uma vez, se necessário)
  addSampleEvents() {
    const events = [
      { title: 'Evento de Yoga', description: 'Sessão de yoga.', imageUrl: 'https://picsum.photos/200/300?random=1' },
      { title: 'Workshop de Fotografia', description: 'Capture momentos.', imageUrl: 'https://picsum.photos/200/300?random=2' },
      // ... adicione mais eventos conforme necessário
    ];

    events.forEach(event => {
      this.firestore.collection('events').add(event).then(() => {
        console.log(`Evento "${event.title}" adicionado com sucesso!`);
      }).catch(error => {
        console.error("Erro ao adicionar evento: ", error);
      });
    });
  }
}
