import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  showButton = [true,false,false,false,false,false,false,false,]

  ngOnInit() {
  }

  onButtonClick(number) {
    for (var i=0; i < this.showButton.length; i++) {
      if (this.showButton[i]){
        this.showButton[i] = false;
      }
    }
    this.showButton[number] = true
  }
}
