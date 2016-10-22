import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'simplecalculator'})
export class SimpleCalculatorPipe implements PipeTransform {
  transform(value1: number, value2: number): any {
    //let exp = parseFloat(exponent);
    //return Math.pow(value, isNaN(exp) ? 1 : exp);
    //if(isNaN(value1) || isNaN(value2)){return ("Invalid input. Please enter a number")};
    //let sum = value1 + value2;
    return ((isNaN(value1) || isNaN(value2))?"Invalid input. Please enter a number" : (+value1 + +value2));
  }
}
