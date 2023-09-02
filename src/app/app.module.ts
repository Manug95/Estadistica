import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EstadisticaDescriptivaComponent } from './components/estadistica-descriptiva/estadistica-descriptiva.component';
import { MathService } from './services/math.service';
import { AnalisisCombinatorioComponent } from './components/analisis-combinatorio/analisis-combinatorio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstadisticaDescriptivaComponent,
    AnalisisCombinatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MathService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
