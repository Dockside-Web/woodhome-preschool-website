import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const SITE_URL = 'https://woodhomepreschool.com';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //This is for scrolling to top of page when using routerLink to go to another page
  private platformId = inject(PLATFORM_ID);
  private meta = inject(Meta);
  private activatedRoute = inject(ActivatedRoute);
  private document = inject(DOCUMENT);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateMetaTags();
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
  }

  // Keeps the meta description and Open Graph tags in sync with the current route
  private updateMetaTags() {
    let route = this.activatedRoute.snapshot;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const description = route.data['description'];
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
    }
    if (route.title) {
      this.meta.updateTag({ property: 'og:title', content: route.title });
    }

    const url = SITE_URL + this.router.url.split(/[?#]/)[0];
    this.meta.updateTag({ property: 'og:url', content: url });
    this.document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
  }

  // Skip link: move focus past the header without changing the URL
  skipToMain(event: Event) {
    event.preventDefault();
    document.getElementById('main-content')?.focus();
  }
}
