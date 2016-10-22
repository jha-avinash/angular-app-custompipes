import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {SimpleCalculatorPipe} from './simpleCalculator.pipe'
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SimpleCalculatorPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
