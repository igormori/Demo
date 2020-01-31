import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  showCode = [true,false,false,false,false,false,false,false,]

  constructor() { }

  ngOnInit() {
  }

  onCodeClick(number) {
    for (var i=0; i < this.showCode.length; i++) {
      if (this.showCode[i]){
        this.showCode[i] = false;
      }
    }
    this.showCode[number] = true
  }
}
