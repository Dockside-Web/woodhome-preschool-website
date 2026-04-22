import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

declare global {
  interface Window {
    turnstileFinished: () => void;
    turnstile: {
      render: (selector: string, options: object) => void;
      reset: (selector?: string) => void;
    };
  }
}

let turnstileScriptLoaded = false;

@Component({
  selector: 'app-contact-base',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.base.component.html',
  styleUrls: ['./contact.base.component.css'],
})
export class BaseContactComponent implements OnInit, OnDestroy {
  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    childAge: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  private turnstileVerified = false;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    window.turnstileFinished = () => {
      this.ngZone.run(() => {
        this.turnstileVerified = true;
      });
    };

    if (
      !turnstileScriptLoaded &&
      !document.querySelector('script[src*="turnstile"]')
    ) {
      turnstileScriptLoaded = true;
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      // Script is fresh, auto-render will handle it
    } else {
      // Script already loaded, we need to manually render the widget
      this.renderTurnstile();
    }
  }

  private renderTurnstile() {
    const render = () => {
      if (window.turnstile) {
        window.turnstile.render('.cf-turnstile', {
          sitekey: '0x4AAAAAADBUdaxCoaxaoWDk',
          callback: 'turnstileFinished',
          theme: 'light',
        });
      } else {
        // turnstile global not ready yet, retry shortly
        setTimeout(() => render(), 100);
      }
    };
    render();
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) return;
    delete (window as any).turnstileFinished;
  }

  get isFormValid() {
    return this.contactForm.valid && this.turnstileVerified;
  }

  onSubmit() {
    if (!this.isFormValid) return;
    (
      document.querySelector('form[name="contact"]') as HTMLFormElement
    ).submit();
  }
}
