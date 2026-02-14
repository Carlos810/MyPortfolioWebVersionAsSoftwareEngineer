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
      position: 'Software Engineer .NET',
      dateRange: 'Insurance Technology Company',
      description: 'Designed resilient asynchronous transactional flows in .NET and PostgreSQL, ensuring data consistency in critical business processes. Improved high-traffic module performance by 40–60% through SQL and data access optimization. Standardized DTOs and internal contracts to reduce technical debt and increase cross-service reuse. Implemented business state validations that significantly reduced operational errors and manual reprocessing.'
    },
    {
      title: 'It Group',
      position: 'Tester and Backend Developer',
      dateRange: 'Automotive Industry',
      description: 'Contributed to .NET-based business applications supporting real operational workflows. Delivered and validated APIs and scheduled backend jobs critical to daily operations. Performed end-to-end functional testing to ensure business rule accuracy and release stability. Collaborated with DB analysts to maintain data integrity through validations and controlled adjustments. Produced technical and test documentation for production incidents and feature deliveries. Actively participated in Scrum ceremonies, contributing to sprint planning, reviews, and issue resolution.'
    },
    {
      title: 'Clickalia México',
      position: 'Junior Backend Developer',
      dateRange: 'PropTech Startup',
      description: 'Backend engineer in a startup environment, balancing feature delivery and platform reliability under tight deadlines. Architected distributed data processing solutions using .NET and Microsoft Azure serverless services. Designed fault-tolerant ingestion pipelines with queue-based processing and retry policies. Enhanced system scalability through parallel processing and modular architecture patterns. Collaborated cross-functionally with Data Science teams to transform raw data into analytics-ready datasets. Simultaneously managed multiple cloud initiatives while ensuring on-time delivery in an evolving product environment, reviews, and issue resolution.'
    },
    {
      title: 'ThTec Consulting',
      position: 'Full Stack Developer',
      dateRange: 'Banking and Financial Services',
      description: 'Backend engineer supporting core banking modernization initiatives. Refactored code legacy based transactional logic into SQL Server–driven services. Handled large-scale batch processing and high-volume financial datasets. Led controlled data migration operations using BCP and BULK INSERT. Ensured stability of critical banking workflows through Control-M monitoring and production incident support.ng on-time delivery in an evolving product environment, reviews, and issue resolution.'
    },
     {
      title: 'Federal Electoral Court',
      position: 'Full Stack Developer',
      dateRange: 'Federal Electoral Court (México)',
      description: 'Contributed to the modernization of a public election support system. Improved performance and control by migrating data access from Entity Framework to optimized T-SQL queries and stored procedures. Upgraded the frontend architecture from AngularJS to Angular 14, modernizing the application stack. Designed and maintained .NET APIs and WCF services for automated report generation (Excel, Word, PDF). Enhanced business logic efficiency through stored procedure optimization. Worked in close pair programming with a senior engineer, applying clean architecture principles and best practices.'
    }
  ];
}
