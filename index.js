//Code your solutions in this file
function fiveToOneHundred(){
    for(let i = 5; i < 101; i++){
        console.log(i)
    }
}
fiveToOneHundred();
function multiplesOfThree(){
for(let i = 3; i < 101; i+=3){
    console.log(i);
}
}
multiplesOfThree()

function multiplesOfThreeOrFive(){
    for( let i = 3; i < 101; i++){
        if( i % 3 === 0 || i % 5 === 0){
            console.log(i)
        }
    }
}
multiplesOfThreeOrFive();

function untilNum(number){
for( let i = 1; i <= number; i++ ){
    console.log(i);
}
}
untilNum(11)

function multiply(num1, num2){
    return num1*num2;    
};

console.log(multiply(2,5));

function add(num1, num2){
    if(num1 != num2){
    return num1+num2;    
    }else{
    (num1 === num2)
    return (num1+num2)*3;
    }
    
  }
console.log(add(4,4));

function isNegative(num){
    if (num < 0){
        return true;
    }else{
        (num > 0)
        return false
    }
}

console.log(isNegative(-4));

function triangleArea(base, ht){
return (1/2)*base*ht
}


console.log(triangleArea(5,7));






