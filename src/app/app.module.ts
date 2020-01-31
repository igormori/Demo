import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './kendoUi/button/button.component';
import { MasterControlComponent } from './master-control/master-control.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import '@progress/kendo-ui';
import { DatePickerComponent } from './kendoUi/date-picker/date-picker.component';
import { TextFieldComponent } from './kendoUi/text-field/text-field.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartsComponent } from './kendoUi/charts/charts.component';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { RadioButtonsComponent } from './kendoUi/radio-buttons/radio-buttons.component';
import { SourceCodeComponent } from './kendoUi/radio-buttons/source-code/source-code.component';






@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MasterControlComponent,
    DatePickerComponent,
    TextFieldComponent,
    ChartsComponent,
    RadioButtonsComponent,
    SourceCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    ChartsModule,
    TooltipModule,
    DateInputsModule,
    InputsModule,
    RippleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
