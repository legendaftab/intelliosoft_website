import { Component } from '@angular/core';

@Component({
  selector: 'app-insights-section',
  templateUrl: './insights-section.component.html',
  styleUrls: ['./insights-section.component.css']
})
export class InsightsSectionComponent {
  insights = [
    {
      image: 'assets/slides/b.webp',
      title: 'The power and promise of digital identity',
      description:
        'Surpassing 70 billion verification checks this year, digital identity has become crucial for online security.'
    },
    {
      image: 'assets/slides/c.webp',
      title: 'Preparing for an AI future',
      description:
        'Companies with outdated systems and approaches must evolve or risk getting left behind. Here’s how.'
    },
    {
      image: 'assets/slides/d.webp',
      title: 'The rise of decision intelligence',
      description:
        'To make magic with artificial intelligence, start with a clear business objective.'
    },
    {
      image: 'assets/slides/a.webp',
      title: 'AI agents power the public sector',
      description:
        'AI multi-agent systems can be a powerful force in helping governments make decisions and improve services.'
    }
  ];
}
