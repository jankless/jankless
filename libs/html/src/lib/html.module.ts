import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AComponent } from './a/a.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AComponent, ButtonComponent, HeaderComponent, NavComponent],
  exports: [AComponent, ButtonComponent, HeaderComponent, NavComponent],
})
export class HtmlModule {}
