import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

declare global {
  interface Window {
    turnstileFinished: () => void;
  }
}

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

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    window.turnstileFinished = () => {
      this.ngZone.run(() => {
        this.turnstileVerified = true;
      });
    };
  }

  ngOnDestroy() {
    delete (window as any).turnstileFinished;
  }

  get isFormValid() {
    return this.contactForm.valid && this.turnstileVerified;
  }

  async onSubmit() {
    if (!this.isFormValid) return;
    (
      document.querySelector('form[name="contact"]') as HTMLFormElement
    ).submit();
  }
}
