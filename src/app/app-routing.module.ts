import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  EvaluatorsComponent,
  FaqComponent,
  QuotationsComponent,
} from '@components/index';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'evaluators', component: EvaluatorsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'quotations', component: QuotationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
