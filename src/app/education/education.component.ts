import { Component, OnInit } from '@angular/core';
import { Education } from '../education';
import { EducationService } from  '../education.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations : Education[];
  constructor( private educationService: EducationService) { }

  ngOnInit() {
    this.getEducations();
  }

  getEducations() : void  {
    console.log("EducationComponent :: getEducations");
    
    this.educationService.getEducations()
    .subscribe( educations => this.educations =  educations)
    console.log("EducationComponent :: getEducations" + this.educations);
  }
}
