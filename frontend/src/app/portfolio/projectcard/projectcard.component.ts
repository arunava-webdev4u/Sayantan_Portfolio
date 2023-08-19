import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectcardComponent {
    @Input() title: string = "";
    @Input() url: string = "";
}
