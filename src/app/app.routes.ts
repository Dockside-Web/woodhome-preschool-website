import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProgramsPage } from './pages/programs/programs';
import { ContactPage } from './pages/contact/contact';
import { AboutPage } from './pages/about/about';
import { ParentResourcesPage } from './pages/parentResources/parentResources';
import { PrivacyPolicyPage } from './pages/legal/privacy-policy/privacy-policy';
import { TermsOfServicePage } from './pages/legal/terms-of-service/terms-of-service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programs', component: ProgramsPage },
  { path: 'contact', component: ContactPage },
  { path: 'about', component: AboutPage },
  { path: 'parent-resources', component: ParentResourcesPage },
  { path: 'legal/privacy-policy', component: PrivacyPolicyPage },
  { path: 'legal/terms-of-service', component: TermsOfServicePage },
  { path: '**', redirectTo: '' },
];
