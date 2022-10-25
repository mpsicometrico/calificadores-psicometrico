import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  EvaluatorsComponent,
  EvaluatorComponent,
  FaqComponent,
  QuotationsComponent,
} from '@components/index';

const routes: Routes = [
  { path: '', title: 'Inicio', component: HomeComponent },
  {
    path: 'evaluators',
    title: 'Calificadores',
    children: [
      { path: '', component: EvaluatorsComponent },
      {
        path: ':name',
        title: 'Calificador Wisc',
        component: EvaluatorComponent,
      },
    ],
  },
  { path: 'faq', title: 'Preguntas Frecuentes', component: FaqComponent },
  { path: 'quotations', component: QuotationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
