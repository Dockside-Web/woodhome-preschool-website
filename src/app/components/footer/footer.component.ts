import { Component } from '@angular/core';
import { LucideIconsModule } from '../../lucide.module';
import { RouterModule } from '@angular/router';
import { contactInfo } from '../../data/info';

@Component({
  selector: 'app-footer-base',
  standalone: true,
  imports: [LucideIconsModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  contactInfo = contactInfo;
}
