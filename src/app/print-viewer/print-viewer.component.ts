import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print-viewer',
  templateUrl: './print-viewer.component.html',
  styleUrls: ['./print-viewer.component.css']
})
export class PrintViewerComponent implements OnInit {
  pdfSrc: string = '/assets/pdf/Microsoft.pdf';
  constructor(    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("url"+ this.route.snapshot.paramMap.get('url'));
    this.pdfSrc = this.route.snapshot.paramMap.get('url');
  }

}
