import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-control',
  templateUrl: './master-control.component.html',
  styleUrls: ['./master-control.component.scss']
})
export class MasterControlComponent implements OnInit {

 
  label="Button"
  icon=false
  showButton = [false,false,false]
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
