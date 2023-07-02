function solution(numbers) {
   let array = new Array(10);
    for(let i of numbers){
        array[i] = true;
    }
    let sum = 0;
    for(let i=0 ; i < array.length ; i++){
        if(!array[i]){
            sum += i;
        }
    }
    return sum;
}