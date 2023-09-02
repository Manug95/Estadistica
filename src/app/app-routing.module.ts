import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticaDescriptivaComponent } from './components/estadistica-descriptiva/estadistica-descriptiva.component';
import { AnalisisCombinatorioComponent } from './components/analisis-combinatorio/analisis-combinatorio.component';

// RouterModule.forRoot([
//   {path: 'crisis-list', component: CrisisListComponent},
//   {path: 'heroes-list', component: HeroesListComponent},
//   {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
//   {path: '**', component: PageNotFoundComponent}
// ]),
const routes: Routes = [
  { path: "estadistica-descriptiva", component: EstadisticaDescriptivaComponent },
  { path: "analisis-combinatorio", component: AnalisisCombinatorioComponent },
  { path: "", redirectTo: "/", pathMatch: "full" },
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
