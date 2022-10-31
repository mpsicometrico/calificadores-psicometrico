import { Component, OnInit, SecurityContext } from '@angular/core';
import { EvaluatorLink } from '@models/index';
import { EvaluatorsService } from '@services/index';
import { ActivatedRoute } from '@angular/router';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.scss'],
})
export class EvaluatorComponent implements OnInit {
  element!: EvaluatorLink;
  constructor(
    private evaluatorsService: EvaluatorsService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    let element: EvaluatorLink = {
      src: '',
      name: '',
      img: '',
      url: '',
      sanitizedSrc: '',
    };
    this.route.params.subscribe((params) => {
      this.element =
        this.evaluatorsService.getLinks().find((el) => {
          return el.url === params['name'];
        }) ?? element;
    });
    this.element.sanitizedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.element.src
    );
  }
}
