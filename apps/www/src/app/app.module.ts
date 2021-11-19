import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HtmlModule } from '@jankless/html';
import { UiModule } from '@jankless/ui';
import { AppComponent } from './app.component';
import { EverestComponent } from './everest/everest.component';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
  {
    path: 'everest',
    component: EverestComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
] as Routes;
@NgModule({
  declarations: [AppComponent, HomeComponent, EverestComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HtmlModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
