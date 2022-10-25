import { Injectable } from '@angular/core';
import { EvaluatorLink } from '@models/index';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EvaluatorsService {
  private evaluatorsLinks: EvaluatorLink[] = [];
  private evaluatorIndex = new BehaviorSubject<number>(-1);
  evaluatorIndex$ = this.evaluatorIndex.asObservable();

  constructor() {
    this.evaluatorsLinks = [
      {
        name: 'Wisc',
        url: 'wisc',
        src: `https://onedrive.live.com/embed?resid=CCA0D51ED949EA48%213099&authkey=%21AIAFzg76zSLXx_0&em=2&wdAllowInteractivity=Fase&AllowTyping=True&ActiveCell='Resultado'!A15&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&resen=false`,
        img: 'assets/images/wisc.webp',
      },
    ];
  }

  getLinks(): EvaluatorLink[] {
    return this.evaluatorsLinks;
  }

  setIndex(index: number): void {
    this.evaluatorIndex.next(index);
  }
}
