import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'jankless-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent implements OnInit {
  dark = false;

  constructor() {}

  ngOnInit(): void {}

  handleClick(event: any) {
    try {
      let body = document.querySelector('body');
      body?.classList.toggle('dark');
    } catch (error) {
      throw error;
    }
  }
}
