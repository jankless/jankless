import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'input[type="radio"]',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
