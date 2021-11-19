import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'button[type="switch"]',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent implements OnInit {
  dark = false;

  constructor() {}

  ngOnInit(): void {}

  get isDark() {
    let body = document.querySelector('body');
    return body?.classList.contains('dark');
  }

  @HostListener('click')
  handleClick() {
    try {
      let body = document.querySelector('body');
      body?.classList.toggle('dark');
    } catch (error) {
      throw error;
    }
  }
}
