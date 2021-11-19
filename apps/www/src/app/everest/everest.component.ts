import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: './everest.component.html',
  styleUrls: ['./everest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EverestComponent implements OnInit {
  pageData = {
    seo: {
      title: 'Everest 2021',
      description:
        'Ullam laboriosam obcaecati dolorum illum aut quam vitae maxime tenetur explicabo ipsa voluptates quisquam est sit similique, ab rem, eveniet, placeat iusto?',
    },
    img: {
      width: 320,
      src: 'assets/MP_Everest_Logo.svg',
      alt: 'Mike Posner branded Everest Guided Tour logo',
    },
    p: {
      content:
        'Ullam laboriosam obcaecati dolorum illum aut quam vitae maxime tenetur explicabo ipsa voluptates quisquam est sit similique, ab rem, eveniet, placeat iusto?',
    },
    video: {
      width: 640,
      poster: 'assets/sizzle-poster.jpg',
      sources: {
        webm: {
          src: 'assets/MP_Everest_Sizzle.webm',
          type: 'video/webm',
        },
        mp4: {
          src: 'assets/MP_Everest_Sizzle.mp4',
          type: 'video/mp4',
        },
      },
      content: "Sorry, your browser doesn't support embedded videos.",
    },
    a: {
      href: '',
      target: '_blank',
      content: 'Apply Now',
    },
  };

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(this.seo.title);
    this.meta.updateTag({ name: 'description', content: this.seo.description });
  }

  ngOnInit(): void {}

  get seo() {
    return this.pageData.seo;
  }

  get img() {
    return this.pageData.img;
  }
  get p() {
    return this.pageData.p;
  }
  get video() {
    return this.pageData.video;
  }
  get a() {
    return this.pageData.a;
  }
}
