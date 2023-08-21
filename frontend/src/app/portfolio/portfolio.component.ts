import { Component } from '@angular/core';
import { Project } from '../shared/Project';
import { projectData } from '../shared/projects-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
    projects: Project[] = projectData;
}
