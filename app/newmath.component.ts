import { Component } from '@angular/core';
import { MathModel } from './MathModel';


@Component({
    selector : 'newmath',
    template  : `
        <style>
            label{
			display: block;
		}
        </style>
        <h3>Math Calculator</h3>
        <label for="">Num 1</label><input type="number" placeholder="Enter Num 1" [(ngModel)] = "newmath.num1"/>
        
        <select [(ngModel)] = "selectResult" (change)="performOperation()">
            <option>add</option>
            <option>sub</option>
            <option>mult</option>
            <option>divide</option>
        </select>

        <label for="">Num 2</label><input type="number" placeholder="Enter Num 2" [(ngModel)] = "newmath.num2"/>
        <div> Salary : {{newmath.result}}</div>
    `
})
export class NewMathComponent{
    messsage = "Result";
    selectResult = "add";
    performOperation(){
        let _this = event;
        debugger;
        this.newmath[this.selectResult]();
        
    }
    newmath:MathModel = new MathModel();
}