import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProgramsPage } from './pages/programs/programs';
import { ContactPage } from './pages/contact/contact';
import { AboutPage } from './pages/about/about';
import { ParentResourcesPage } from './pages/parentResources/parentResources';
import { PrivacyPolicyPage } from './pages/legal/privacy-policy/privacy-policy';
import { TermsOfServicePage } from './pages/legal/terms-of-service/terms-of-service';

// `title` sets the browser tab title; `data.description` is applied as the
// page's meta description in AppComponent.
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Woodhome Preschool Center | Preschool in Parkville, MD',
    data: {
      description:
        'Woodhome Preschool Center in Parkville, MD offers preschool programs for 2s, 3s, and 4s, plus extended care and summer programs. Serving families for over 25 years.',
    },
  },
  {
    path: 'programs',
    component: ProgramsPage,
    title: 'Our Programs | Woodhome Preschool Center',
    data: {
      description:
        'Explore our 2s, 3s, and 4s preschool programs, extended care options, and summer program at Woodhome Preschool Center in Parkville, MD.',
    },
  },
  {
    path: 'contact',
    component: ContactPage,
    title: 'Contact Us | Woodhome Preschool Center',
    data: {
      description:
        'Contact Woodhome Preschool Center at 1776 East Joppa Road, Parkville, MD 21234. Call (410) 668-7587 or send us a message to schedule a tour.',
    },
  },
  {
    path: 'about',
    component: AboutPage,
    title: 'About Us | Woodhome Preschool Center',
    data: {
      description:
        'Learn about Woodhome Preschool Center, our 25+ year story in Parkville, MD, what matters to us, and the teachers who make our school special.',
    },
  },
  {
    path: 'parent-resources',
    component: ParentResourcesPage,
    title: 'Parent Resources | Woodhome Preschool Center',
    data: {
      description:
        'Tuition payment options, inclement weather policy, enrollment documents, and state-mandated forms for Woodhome Preschool Center families.',
    },
  },
  {
    path: 'legal/privacy-policy',
    component: PrivacyPolicyPage,
    title: 'Privacy Policy | Woodhome Preschool Center',
    data: {
      description: 'Privacy Policy for the Woodhome Preschool Center website.',
    },
  },
  {
    path: 'legal/terms-of-service',
    component: TermsOfServicePage,
    title: 'Terms of Service | Woodhome Preschool Center',
    data: {
      description:
        'Terms of Service for the Woodhome Preschool Center website.',
    },
  },
  { path: '**', redirectTo: '' },
];
