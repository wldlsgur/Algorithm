function solution(park, routes) {
    const yLength = park.length;
    const xLength = park[0].length;
    let startPoitn ;

    for(let i=0 ; i<yLength ; i++) {
        if(park[i].includes("S")) {
            startPoitn = [i, park[i].indexOf("S")];
            break;
        }
    };

    outLoof : for(let i=0 ; i<routes.length ; i++) {
        const [y, x] = startPoitn;
        const [direction, distance] = routes[i].split(" ");
        let newX = x;
        let newY = y;

        for(let j=0 ; j<Number(distance) ; j++) {
            switch(direction) {
                case "E" :
                    newX++;
                    break;
                case "W" :
                    newX--
                    break;
                case "N" :
                    newY--;
                    break;
                case "S" :
                    newY++;
                    break;
            }
            if(newX < 0 || newX >= xLength || newY < 0 || newY >= yLength) continue outLoof;
            if(park[newY][newX] === "X") continue outLoof;
        }
        startPoitn = [newY, newX];
    }
    return startPoitn;
}

// solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]); // [2, 1]
// solution(["SOO","OXX","OOO"],	["E 2","S 2","W 1"]); // [0, 1]
// solution(["OSO","OOO","OXO","OOO"],	["E 2","S 3","W 1"]) // [0, 0]