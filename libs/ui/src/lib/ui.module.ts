import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeroComponent,
    SwitchComponent
  ],
  exports: [
    HeroComponent,
    SwitchComponent
  ],
})
export class UiModule {}
