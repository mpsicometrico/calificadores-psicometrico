import { Component, OnInit, Input } from '@angular/core';
import { EvaluatorLink } from '@models/index';
import { EvaluatorsService } from '@services/index';

@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.scss'],
})
export class EvaluatorComponent implements OnInit {
  element!: EvaluatorLink;
  constructor(private evaluatorsService: EvaluatorsService) {}

  ngOnInit(): void {
    this.evaluatorsService.evaluatorIndex$.subscribe((index) => {
      console.log(index);
      this.element = this.evaluatorsService.getLinks()[index];
    });
  }
}
