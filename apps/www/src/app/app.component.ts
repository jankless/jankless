import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'jankless-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnChanges {
  today = new Date();

  ngOnChanges() {
    console.log('changes');
    this.today = new Date();
  }

  handleClick(event: MouseEvent) {
    console.log(event);
    this.today = new Date();
  }
}
