import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'gistlens',
  templateUrl: './gistlens.component.html',
})
export class GistLensComponent {
  stackHolder = {
    count: 3,
    storage : [
      1,
      '{id: 1,value: "obj"}',
      "stringHolder",
      46
    ]
    };

  input1 = new FormControl('1,2,3,4,5');
  output1 = "Output...";
  
  input2 = new FormControl('push,5');
  output2 = "Output...";
  
  input3 = new FormControl('[0, 0, 1], 9');
  output3 = "Output...";

  constructor(
  ) {
    }

  public process1 = () => {
this.output1 = this.ArrayPointSystemSum(this.input1.value ? this.input1.value .toString() : "");
  }

  public process2 = () => {
    this.output2 = this.StackProcess(this.input2.value ? this.input2.value .toString() : "");
  }

  public process3 = () => {
    this.output3 = this.FribonacciSum(this.input3.value ? this.input3.value .toString() : "");
  }

  ArrayPointSystemSum = (input: String) => {
    var points = input.split(",").map(Number);

    var even = points.filter(point => point % 2 === 0);
    var odd = points.filter(point => point % 2 === 1);
    var fives = points.filter(point => point === 5);

    return ((1 * even.length) +
(3 * (odd .length- fives.length)) +
(5 * fives.length)
    ).toString();
  }

  
  FribonacciSum = (input: String) => {
    var length = Number.parseInt(input.split("],")[1]);
    var initial = input.split("],")[0].replace("[", "").split(",").map(Number);
    input = input.replace("[", "");

    var output: number[] = [];
    for(var l = 1; l <= length; l++) {
      if(l <= 3) {
        output.push(initial[l-1]);
      }
      else {
        output.push(output[l-2] + output[l-3] + output[l-4])
      }
    }
    return output.toString();
  }

  StackProcess = (input: String) => {
    var values = input.split(",");
    var stackOperation = values[0];
    var stackValue = values.length > 1 ? values[1] : null;
    return this.stack(this.stackHolder, stackOperation, stackValue).toString();
  }

  

 stack = (stackHolder: any, stackOperation: any, stackValue: any ) => {
 
 var push = function(value: any) {
    // insert on beginning
    // change to ++
    stackHolder.storage.splice(0, 0, value);
    stackHolder.count++;
    return stackHolder.storage;
 }
 
 var pop = function() {
   if (stackHolder.count === 0) {
   return [];
   }
 
  //  var poppedItem = stackHolder.storage[stackHolder.count];// should be [0]
   var poppedItem = stackHolder.storage[0];// should be [0]
  //  delete stackHolder.storage[stackHolder.count];// should be [0]
   stackHolder.storage.splice(0,1);
 stackHolder.count--;
   return poppedItem;
 }
 
 var peek = function() {
 return [stackHolder.storage[0]];
 }
 
 var swap = function() {
  var pos1 = stackHolder.storage[0];
  var pos2 = stackHolder.storage[1];
  stackHolder.storage[0] = pos2;
  stackHolder.storage[1] = pos1;
  return stackHolder.storage;// not required
 }
 
 switch(stackOperation) {
  case 'push':
    return push(stackValue);
  break;
  case 'pop':
    return pop();
  break;
  case 'swap':
    return swap();
  break;
  case 'peek':
    return peek();
 break;
 default:
   return stackHolder.storage;
 }
}

}