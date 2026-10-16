import { Component } from '@angular/core';

interface Testimonial {
  initials: string;
  name: string;
  role: string;
  text: string;
  color: 'blue' | 'yellow' | 'red';
}

@Component({
  selector: 'app-testimonials-home',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class HomeTestimonialsComponent {
  stars = Array(5);

  // Shown large on the left on desktop; the rest stack beside it
  featured: Testimonial = {
    initials: 'KW',
    name: 'Kimmie W.',
    role: 'Parent',
    text: 'Woodhome Pre-K has been a perfect fit for our family. My current kindergartener went through all three class offerings (2s, 3s, and 4s) and thrived each year, building friendships and developing vocabulary and foundational school concepts. Now, my 2-year-old is doing the same and equally enjoys her time there. I especially appreciate the à la carte before- and after-care options. Woodhome is very flexible, allowing me to drop off early or pick up late when needed, all at a fair rate. Woodhome truly sets children up for success, and we couldn\'t be happier with our experience.',
    color: 'blue'
  };

  testimonials: Testimonial[] = [
    {
      initials: 'GK',
      name: 'Gina K.',
      role: 'Parent',
      text: 'Woodhome Preschool has helped my son gain so much confidence and independence by creating a safe and nurturing environment for him to learn and grow. The classrooms are colorful and full of fun information for young minds to absorb. I\'m so thankful we found this school and for teachers who feel like family!',
      color: 'red'
    },
    {
      initials: 'TO',
      name: 'Tiffany O.',
      role: 'Parent',
      text: 'My daughter loves this school! The children learn so much and my daughter is writing her name and letters within the first month. This is an excellent center.',
      color: 'yellow'
    },
    {
      initials: 'KS',
      name: 'Kenya S.',
      role: 'Parent',
      text: 'Love the staff and love that my daughter runs out to me with a smile on her face each time. They keep the kids happy and she loves to learn.',
      color: 'blue'
    }
  ];
}
