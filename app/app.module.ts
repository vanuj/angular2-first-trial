import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { CalculatorComponent } from './calculator.component';
import { MathComponent } from './math.component';
import { NewMathComponent } from './newmath.component';



@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent, CalculatorComponent , MathComponent, NewMathComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
