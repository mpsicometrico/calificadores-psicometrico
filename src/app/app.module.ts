import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { QuotationsComponent } from './components/quotations/quotations.component';
import { FaqComponent } from './components/faq/faq.component';
import { EvaluatorsComponent } from './components/evaluators/evaluators.component';
import { EvaluatorComponent } from './components/evaluator/evaluator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QuotationsComponent,
    FaqComponent,
    EvaluatorsComponent,
    EvaluatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
