import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';


@Component({
    selector : 'calculator',
    template  : `
        <style>
            label{
			display: block;
		}
        </style>
        <h3>Salary Calculator</h3>
        <label for="">Basic</label><input type="number" placeholder="Enter Basic" [(ngModel)] = "calculator.basic"/>
        <label for="">hra</label><input type="number" placeholder="Enter HRA" [(ngModel)] = "calculator.hra"/>
        <label for="">tax</label><input type="number" placeholder="Enter Tax" [(ngModel)] = "calculator.tax"/>
        <input type="button" value="Calculate" (click)='calculator.salaryCalculate()'/>
        <div> Salary : {{calculator.salary}}</div>
    `
})
export class CalculatorComponent{
    messsage = "Result"
    calculator:CalculatorModel = new CalculatorModel();
}