import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  timelineItems = [
    {
      title: 'Thona Seguros',
      position: '.NET Backend Engineer',
      dateRange: 'Mar 2025 - Nov 2025',
      description: 'Internal enterprise integrations with platform-supporting goals. Strong focus on .NET and Java backend development distributed transactions, synchronous processing.'
    },
    {
      title: 'Clickalia México',
      position: 'JNlor Backend Engineer',
      dateRange: 'PropTech Startup',
      description: 'Migración del weekend enhancements to monitoring and advanced execution utilities. Experienced reliability and increased system uptime.'
    },
    {
      title: 'ThTec',
      position: 'Banking Technology Consulting',
      dateRange: 'Oct 2021 | May 2025',
      description: 'Engineered mission-critical backend services with focus on enterprise-grade reliability, distributed transactions, and high-performance computing systems.'
    },
    {
      title: 'Education',
      position: "Bachelor's Degree in Industrial Engineering",
      dateRange: 'Tecnilienica University - Mexico',
      description: 'Strong foundation in systems engineering, process optimization, and technical problem-solving methodologies.'
    }
  ];
}
