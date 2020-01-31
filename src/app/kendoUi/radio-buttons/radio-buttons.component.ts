import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent implements OnInit {

  showCode = [true, false, false, false, false, false, false, false,]
  public model = {
    radio: 'one',
    checkboxOne: true,
    checkboxtwo: false,
    checkBoxError: false,
    checkBoxDisable: false,
    checkedOne: true,
    checkedTwo: false,
  };

  switchOne = 'On';
  switchTwo = 'Off';
  switchDisabled = 'Off';
  switchDisabledOn = 'On';
  

  constructor() { }

  ngOnInit() {
  }

  onCodeClick(number) {
    for (var i = 0; i < this.showCode.length; i++) {
      if (this.showCode[i]) {
        this.showCode[i] = false;
      }
    }
    this.showCode[number] = true
  }

  onChangeSwitchOne(number){
    this.onCodeClick(number);
    (this.switchOne === 'On') ? this.switchOne = 'Off' : this.switchOne = 'On'
  }
  onChangeSwitchTwo(number) {
    this.onCodeClick(number);
    (this.switchTwo === 'On') ? this.switchTwo = 'Off' : this.switchTwo = 'On'
  }
}
