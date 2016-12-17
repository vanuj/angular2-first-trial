export class MathModel{
    //init model
    num1 = 0;
    num2 = 0;
    result = 0;

    add(){
        this.result = this.num1 + this.num2;
    }
    sub(){
        this.result = this.num1 - this.num2;
    }
    mult(){
        this.result = this.num1 * this.num2;
    }
    divide(){
        if(this.num1>0 && this.num2>0){
            this.result = this.num1 / this.num2;
        }  
        else this.result = 0;
    }
}