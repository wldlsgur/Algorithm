function solution(ingredient) {
    let result = 0;
    let menuStack = [];

    for(let i of ingredient){
        menuStack.push(i);
        if (menuStack.slice(-4).join("") === "1231" && menuStack.length >= 4) {
          result++;
          menuStack.splice(-4, 4);
        }
    }    
    return result;
}