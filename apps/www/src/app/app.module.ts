import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElementsModule } from '@jankless/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ElementsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
