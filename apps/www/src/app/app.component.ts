import { ChangeDetectionStrategy, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'jankless',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.renderer);
  }
}
