export class CalculatorModel{
    salary = 0;
    hra = 0;
    basic = 0;
    tax = 0;

    salaryCalculate(){
        this.salary = this.basic + this.hra - (100-this.tax)/100;
    }
}