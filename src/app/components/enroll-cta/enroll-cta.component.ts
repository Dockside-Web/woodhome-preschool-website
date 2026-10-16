import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { contactInfo } from '../../data/info';

@Component({
  selector: 'app-enroll-cta',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './enroll-cta.component.html',
  styleUrls: ['./enroll-cta.component.css'],
  host: { '[style.--cta-bg]': 'background' },
})
export class EnrollCtaComponent {
  // Match the background of the section directly above so the card appears to sit on it
  @Input() background = '#f8fafc';

  contactInfo = contactInfo;
}
