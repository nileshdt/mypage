import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
  }

  showFile( url : string) : void {
    console.log("click");
  }
}
