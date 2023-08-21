import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectcardComponent implements OnInit {
    @Input() title: String = "";
    @Input() imageUrl: String = "";
    @Input() type: String = "";
    @Input() url: String = "";

    ngOnInit(): void {
        console.log(this.imageUrl)
    }
}
