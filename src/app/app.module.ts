import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AiPoweredPageComponent } from './components/ai-powered-page/ai-powered-page.component';
import { DxcTeamSectionComponent } from './components/dxc-team-section/dxc-team-section.component';
import { ModernizeTransformSectionComponent } from './components/modernize-transform-section/modernize-transform-section.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { InsightsSectionComponent } from './components/insights-section/insights-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AiPoweredPageComponent,
    DxcTeamSectionComponent,
    ModernizeTransformSectionComponent,
    SubscriptionFormComponent,
    InsightsSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
