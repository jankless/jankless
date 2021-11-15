import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HtmlModule } from '@jankless/html';
import { UiModule } from '@jankless/ui';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

export const routes: Route[] = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
] as Routes;
@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ServicesComponent, ContactComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HtmlModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
