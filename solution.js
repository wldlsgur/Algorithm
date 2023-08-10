function solution(park, routes) {
    const yLength = park.length;
    const xLength = park[0].length;
    const startPoitn = [];

    for(let i=0 ; i<yLength ; i++) {
        if(park[i].includes("S")) {
            startPoitn.push([i, park[i].indexOf("S")]);
            break;
        }
    };

    for(let i=0 ; i<routes.length ; i++) {
        const [y, x] = startPoitn[0];
        const [direction, distance] = routes[i].split(" ");
        let newX = x;
        let newY = y;

        switch(direction) {
            case "E" :
                newX += Number(distance);;
                break;
            case "W" :
                newX -= Number(distance);;
                break;
            case "N" :
                newY -= Number(distance);
                break;
            case "S" :
                newY += Number(distance);
                break;
        }

        if(newX < 0 || newX >= xLength || newY < 0 || newY >= yLength) continue;
        if(park[newY][newX] === "X") continue;

        startPoitn[0] = [newY, newX];
    }
    console.log(startPoitn[0])
    return startPoitn[0];
}

// solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]); // [2, 1]
solution(["SOO","OXX","OOO"],	["E 2","S 2","W 1"]); // [0, 1]
// solution(["OSO","OOO","OXO","OOO"],	["E 2","S 3","W 1"]) // [0, 0]