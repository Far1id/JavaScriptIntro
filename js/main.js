function GetMaxNum(array){
    let maxnum = 0;
    for(let i =0; i < array.length; i++){
        if(maxnum<array[i]){
            maxnum=array[i];
        }
    }
    return maxnum;
}

function SumOfEven(...numbers){
    let sum = 0 ;
    for(let i =0; i < numbers.length; i++){
        if(numbers[i]%2==0){
            sum+=numbers[i];
        }
    }
    return sum;
}

function PowerOfNums(num1 , num2){
    let power = 1;
    while(num2>0){
        power *= num1;
        num2--;
    }
    return power;
}

let array = [1,2,7,5];
let maxint = GetMaxNum(array);
console.log(maxint);
alert(maxint);

let sum = SumOfEven(1,2,3,4,5,6,7);
console.log(sum);
alert(sum);

let num1 = prompt("Eded 1: ")
let num2 = prompt("Eded 2: ")


let power = PowerOfNums(num1,num2);
console.log(power);
alert(power);

