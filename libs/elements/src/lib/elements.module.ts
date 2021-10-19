import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CheckboxComponent } from './input/checkbox/checkbox.component';
import { RadioComponent } from './input/radio/radio.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, CheckboxComponent, RadioComponent],
  exports: [HeaderComponent, FooterComponent, CheckboxComponent, RadioComponent],
})
export class ElementsModule {}
