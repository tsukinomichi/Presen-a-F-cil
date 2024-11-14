import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements AfterViewInit {
  isDarkMode: boolean = false;  // Estado inicial do modo escuro

  constructor(private router: Router) {}

  // Redireciona para a página de notificações ao clicar no ícone
  goToNotifications() {
    this.router.navigate(['/notifications']);
  }

  // Alterna entre modo claro e escuro
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  // Ajusta a altura do ion-content dinamicamente para preencher toda a tela
  ngAfterViewInit() {
    this.adjustContentHeight();
    window.addEventListener('resize', this.adjustContentHeight);  // Recalcula ao redimensionar a janela
  }

  // Ajusta dinamicamente a altura do conteúdo para evitar espaços em branco
  private adjustContentHeight = () => {
    const content = document.querySelector('ion-content');
    if (content) {
      const tabBarHeight = 56; // Altura da Tab Bar
      content.style.height = `${window.innerHeight - tabBarHeight}px`;
    }
  };
}
