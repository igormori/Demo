import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LineStyle } from '@progress/kendo-angular-charts';
declare var kendo: any;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  public value: Date = kendo.toString(new Date(), "dd MMM yyyy")
  @ViewChild('date', {static: false}) private dateEl;
  @ViewChild('calendar', {static: false}) private calendarEl;
  public datePicker;
  public calendar;

  constructor() { }

  ngOnInit() {
    document.getElementsByClassName('k-animation-container')[1].setAttribute('aria-hidden', 'false');
    
  }

 
  ngAfterViewInit() {
    this.datePicker = kendo.jQuery(this.dateEl.nativeElement).kendoDatePicker({
      format: "dd MMMM yyyy"
  }).data('kendoDatePicker');
  this.calendar = kendo.jQuery(this.calendarEl.nativeElement).kendoCalendar({
    format: "dd MMMM yyyy"
  }).data('kendoDatePicker');
  }

}

