import { Component, OnInit } from '@angular/core';
import { Link } from '@models/index';
import { EvaluatorsService } from '@services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  evaluatorsLinks: Link[];
  constructor(private evaluatorsService: EvaluatorsService) {
    this.evaluatorsLinks = this.evaluatorsService.getLinks();
  }

  ngOnInit(): void {}
}
