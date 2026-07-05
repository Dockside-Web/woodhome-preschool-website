import { Component } from '@angular/core';
import { BaseHeroComponent } from '../../components/hero/hero.component';
import { RouterModule } from '@angular/router';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  photoUrl: string;
  emoji: string;
  altText: string;
}

@Component({
  selector: 'app-about',
  imports: [BaseHeroComponent, RouterModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class AboutPage {
  teamMembers: TeamMember[] = [
    {
      name: 'Kristanna Jones',
      title: 'Lead Teacher & Owner',
      description:
        'Mrs. Kristanna brings a rich background in child psychology, communications, and educational leadership to create a safe, fun, and emotionally supportive environment where every child feels confident, smart, and loved.',
      photoUrl: 'assets/images/Kristanna.webp',
      emoji: '👑',
      altText: 'Kristanna Jones',
    },
    {
      name: 'Sunny Fisher',
      title: 'Lead Teacher',
      description:
        'Former owner of Woodhome Preschool Center for over 25 years, Mrs. Sunny continues to bring creativity, warmth, and a family-like spirit to the classroom, touching the hearts of every child she teaches.',
      photoUrl: 'assets/images/Sunny.webp',
      emoji: '👩‍🏫',
      altText: 'Sunny Fisher',
    },
    {
      name: 'Ann Moseley',
      title: 'Lead Teacher',
      description:
        'Mrs. Ann’s dynamic and energetic approach to learning is unique and well-loved by all children who are lucky enough to be in her class. With over 20 years in the field, Mrs. Ann’s intentional guidance and love for her students always shines through… She brings the fun to Woodhome!',
      photoUrl: 'assets/images/womanPlaceholder.webp',
      emoji: '🍎',
      altText: 'Ann Mosely',
    },
    {
      name: 'Abbie Matson',
      title: 'Assistant Teacher',
      description:
        'Since joining in 2021, Ms. Abbie’s fun-loving nature, responsiveness, and deep care for her students have made her an irreplaceable favorite in the nurturing Woodhome Preschool Center environment.',
      photoUrl: 'assets/images/Abbie.webp',
      emoji: '🤝',
      altText: 'Abbie Matson',
    },
    {
      name: 'Caroline Mitrus',
      title: 'Teaching Aide',
      description:
        'With strong classroom management and a playful, empathetic approach, Mrs. Caroline builds lasting connections and makes learning joyful in Woodhome Preschool Center’s family-like atmosphere.',
      photoUrl: 'assets/images/Caroline.webp',
      emoji: '🎨',
      altText: 'Caroline Mitrus',
    },
    {
      name: 'Julie McCloskey',
      title: 'Operations Manager',
      description:
        'After 20 years in the classroom, Mrs. Julie now serves as Operations Manager, using her deep love for children and school history to expertly oversee communication, billing, and organizational needs.',
      photoUrl: 'assets/images/Julie.webp',
      emoji: '📋',
      altText: 'Julie McCloskey',
    },
    {
      name: 'Kate Fitzgerald',
      title: 'Substitute Teacher',
      description:
        'A retired director with over 20 years of preschool experience, Mrs. Kate now brings joy and energy as a beloved substitute teacher and fun-maker at Woodhome Preschool Center.',
      photoUrl: 'assets/images/womanPlaceholder.webp',
      emoji: '🎉',
      altText: 'Kate Fitzgerald',
    },
  ];
}
