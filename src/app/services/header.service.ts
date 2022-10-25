import { Injectable } from '@angular/core';
import { Link } from '@models/index';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private headerLinks: Link[] = [];
  private isMenuActive: boolean = false;
  private isLinkActive: boolean = false;

  constructor() {
    this.headerLinks = [
      {
        name: 'Inicio',
        url: '',
      },
      {
        name: 'Cotizaciones',
        url: 'quotations',
      },
      {
        name: 'Preguntas Frecuentes',
        url: 'faq',
      },
      {
        name: 'Calificadores',
        url: 'evaluators',
      },
    ];
  }

  getLinks(): Link[] {
    return this.headerLinks;
  }

  getMenuState(): boolean {
    return this.isMenuActive;
  }

  setMenuState(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  getLinkState(): boolean {
    return this.isLinkActive;
  }
}
