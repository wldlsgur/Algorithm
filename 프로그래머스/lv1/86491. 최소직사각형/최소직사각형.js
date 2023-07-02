function solution(sizes) {
    let witdh = [];   
    let height = [];
    
    for(let i=0 ; i<sizes.length ; i++){
        witdh.push(Math.max(sizes[i][0], sizes[i][1]));
        height.push(Math.min(sizes[i][0], sizes[i][1]));
    }
    
    return Math.max(...witdh) * Math.max(...height);
}