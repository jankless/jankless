import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jankless-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'docs';

  ngOnInit() {
    const pixelsPerRem = 16;
    const minWidthPx = 314;
    const maxWidthPx = 1920;
    const minFontSize = 1;
    const maxFontSize = 1.3;
    const minWidth = minWidthPx / pixelsPerRem;
    const maxWidth = maxWidthPx / pixelsPerRem;
    const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
    const yAxisIntersection = -minWidth * slope + minFontSize;
    const clampFunc = `font-size: clamp(${minFontSize}rem, ${yAxisIntersection.toFixed(4)}rem + ${(slope * 100).toFixed(
      4
    )}vw, ${maxFontSize}rem);`;
  }

  handleSubmit(event: any) {
    event.preventDefault();
    console.log(event);
  }
}
