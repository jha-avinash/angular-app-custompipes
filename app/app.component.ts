import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {SimpleCalculatorPipe} from './simpleCalculator.pipe';
@Component({
  selector: 'power-boost-calculator',
  templateUrl: './app/template.html'
})
export class AppComponent {
  value1 = 0;
  value2 = 0;
  }
 
