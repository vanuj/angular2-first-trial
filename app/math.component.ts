import { Component } from '@angular/core';
import { MathModel } from './MathModel';


@Component({
    selector : 'math',
    template  : `
        <style>
            label{
			display: block;
		}
        </style>
        <h3>Math Calculator</h3>
        <label for="">Num 1</label><input type="number" placeholder="Enter Num 1" [(ngModel)] = "math.num1"/>
        <label for="">Num 2</label><input type="number" placeholder="Enter Num 2" [(ngModel)] = "math.num2"/>
        
        <input type="button" value="Add" (click)='math.add()'/>
        <input type="button" value="Sub" (click)='math.sub()'/>
        <input type="button" value="Mult" (click)='math.mult()'/>
        <input type="button" value="Divide" (click)='math.divide()'/>
        
        <div> Salary : {{math.result}}</div>
    `
})
export class MathComponent{
    messsage = "Result"
    math:MathModel = new MathModel();
}