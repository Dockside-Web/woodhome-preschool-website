import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHeroComponent } from '../../components/hero/hero.component';
import { RouterModule } from '@angular/router';
import { EnrollCtaComponent } from '../../components/enroll-cta/enroll-cta.component';

interface Programs {
  title: string;
  subtitle?: string;
  times?: string | string[];
  description: string;
  image: string;
  reverse: boolean; // Used to toggle the layout side
}

@Component({
  selector: 'app-programs-page',
  standalone: true,
  imports: [CommonModule, BaseHeroComponent, RouterModule, EnrollCtaComponent],
  templateUrl: './programs.html',
  styleUrls: ['./programs.css'],
})
export class ProgramsPage {
  programs: Programs[] = [
    {
      title: '2s Preschool Program',
      subtitle: 'Discovering Their World',
      times: 'Tuesdays and Thursdays from 9am-12pm',
      description:
        'Our 2s Preschool Program, Discovering Their World, is designed to gently introduce children to the preschool community while honoring this important stage of early development. In this classroom, children learn what it means to be part of both a school community and a classroom community as they begin building independence, confidence, and social awareness. Through rich sensory exploration, purposeful play, and hands-on experiences, children strengthen fine and gross motor skills while expanding their language and communication abilities. Teachers thoughtfully guide children as they practice sharing space, expressing needs, and engaging with peers.',
      image: '/assets/images/2sClass.webp',
      reverse: false,
    },
    {
      title: '3s Preschool Program',
      subtitle: 'Purposeful Play and Learning',
      times: 'Monday, Wednesday, and Friday from 9am-12pm',
      description:
        'Our 3s Preschool Program, Purposeful Play and Learning, is where fun and foundational learning come together in meaningful ways. This program strikes a thoughtful balance between hands-on play experiences and intentional academic exposure, creating a clear pathway for growth and exploration. Through purposeful play, children are introduced to core preschool fundamentals, including early exposure to shapes, letters, and numbers. Learning is interactive and engaging, allowing children to build confidence as they begin connecting concepts in a developmentally appropriate way. In addition to early academic skills, strong emphasis is placed on social development, language enrichment, and both fine and gross motor growth. Each day is designed to nurture curiosity, independence, and a love of learning—laying the groundwork for future academic success.',
      image: '/assets/images/3sClass.webp',
      reverse: true,
    },
    {
      title: '4s Preschool Program',
      subtitle: 'Kindergarten Readiness',
      times: 'Monday-Friday from 9am-12pm',
      description:
        'Our 4s Preschool Program, Kindergarten Readiness, provides a clear and confident pathway to kindergarten. This program builds on foundational preschool skills through deeper exploration of early academic concepts. Children engage in expanded letter work that goes beyond recognition to include early phonemic awareness, helping them begin applying these skills in meaningful ways. Early math concepts are strengthened through number sense, patterns, and problem-solving activities, while science exploration encourages curiosity, observation, and critical thinking. Through intentional instruction and purposeful play, students develop the skills needed for a smooth and successful transition into kindergarten.',
      image: '/assets/images/4sClass.webp',
      reverse: false,
    },
    {
      title: 'Extended Care Options',
      times:
        'Monday - Friday, flexible options from open-9am and 12pm-close of business',
      description:
        'Our extended care options provide care for children who need support beyond regular school hours in a safe and engaging environment. Before care offers a calm and welcoming start to the day. Children ease into the morning with quiet activities and time to connect with their peers before transitioning smoothly into their classroom routines. Afternoon care includes lunchtime, meaningful learning experiences, and a designated quiet time to recharge. The afternoon flows at a comfortable pace, balancing structured engagement with relaxed social interaction and allows for a smooth, flexible transition to dismissal.',
      image: '/assets/images/ExtendedCare.webp',
      reverse: true,
    },
    {
      title: 'Summer Program',
      description:
        'Our summer program offers a fun, flexible experience built around a different theme each week, keeping children engaged and excited all summer long. We encourage families to inquire directly for the most up-to-date information and details about current offerings.',
      image: '/assets/images/SummerClass.webp',
      reverse: false,
    },
  ];
}
