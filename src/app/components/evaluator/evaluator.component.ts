import { Component, OnInit, Input } from '@angular/core';
import { EvaluatorLink } from '@models/index';

@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.scss'],
})
export class EvaluatorComponent implements OnInit {
  @Input() element!: EvaluatorLink;
  constructor() {}

  ngOnInit(): void {}
}
