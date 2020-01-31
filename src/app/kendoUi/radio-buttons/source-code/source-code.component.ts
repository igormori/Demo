import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss']
})
export class SourceCodeComponent implements OnInit {

  @Input() showCode: string;
  constructor() { }

  ngOnInit() {
  }

}
