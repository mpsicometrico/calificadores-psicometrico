import { Component, OnInit } from '@angular/core';
import { Link } from '@models/index';
import { HeaderService } from '@services/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerLinks: Link[] = [];
  isMenuActive: boolean;
  isLinkActive: boolean;

  constructor(private headerService: HeaderService) {
    this.isMenuActive = this.headerService.getMenuState();
    this.headerLinks = this.headerService.getLinks();
    this.isLinkActive = this.headerService.getLinkState();
  }

  ngOnInit(): void {}

  toggleMenu(): void {
    this.headerService.setMenuState();
    this.isMenuActive = this.headerService.getMenuState();
  }
}
