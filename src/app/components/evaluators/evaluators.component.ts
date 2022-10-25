import { Component, OnInit } from '@angular/core';
import { EvaluatorsService } from '@services/index';
import { EvaluatorLink } from '@models/index';

@Component({
  selector: 'app-evaluators',
  templateUrl: './evaluators.component.html',
  styleUrls: ['./evaluators.component.scss'],
})
export class EvaluatorsComponent implements OnInit {
  evaluators: EvaluatorLink[] = [];
  constructor(private evaluatorsService: EvaluatorsService) {
    this.evaluators = this.evaluatorsService.getLinks();
  }

  ngOnInit(): void {}

  handleEvaluator(index: number): void {
    this.evaluatorsService.setIndex(index);
  }
}
