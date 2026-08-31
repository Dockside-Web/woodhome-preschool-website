import { Component } from '@angular/core';
import { BaseHeroComponent } from '../../components/hero/hero.component';
import { contactInfo } from '../../data/info';

@Component({
  selector: 'app-parent-resources',
  imports: [BaseHeroComponent],
  templateUrl: './parentResources.html',
  styleUrls: ['./parentResources.css'],
})
export class ParentResourcesPage {
  contactInfo = contactInfo;
}
