function solution(numbers, hand) {
    const distance = { //키패드 위치 수치화
        1: [0,3], 2:[1,3], 3:[2,3],
        4: [0,2], 5:[1,2], 6:[2,2],
        7: [0,1], 8:[1,1], 9:[2,1],
        '*': [0,0], 0:[1,0], '#':[2,0]
    }
    var answer = '';
    let lastLeft = "*";
    let lastRight = "#";
    for(let i of numbers){
        if(i===1 || i===4 || i===7){
            lastLeft = i
            answer += "L"
        }
        else if(i===3 || i===6 || i===9){
            lastRight = i
            answer += "R"
        }
        else{
            let leftDistance = Math.abs(distance[i][0] - distance[lastLeft][0]) + Math.abs(distance[i][1] - distance[lastLeft][1])
            let rightDistance = Math.abs(distance[i][0] - distance[lastRight][0]) + Math.abs(distance[i][1] - distance[lastRight][1])
            console.log(leftDistance, rightDistance)
            if(leftDistance < rightDistance){
                answer += "L"
                lastLeft = i
            }
            else if (leftDistance > rightDistance){
                answer += "R"
                lastRight = i
            }
            else if(leftDistance === rightDistance){
                if(hand === "right"){
                    answer += "R"
                    lastRight = i
                }else{
                    answer += "L"
                    lastLeft = i
                }
            }
        }
        
    }
    return answer;
}