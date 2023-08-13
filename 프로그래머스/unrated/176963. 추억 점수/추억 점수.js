function solution(name, yearning, photo) {
    const scores = {};
    const result = [];
    
    for(let i=0 ; i<name.length ; i++) {
        const charater = name[i];
        const score = yearning[i];

        scores[charater] = score;
    }

    for(let i=0 ; i<photo.length ; i++) {
        let totalScore = 0;

        for(let j=0; j<photo[i].length ; j++) {
            const charater = photo[i][j];
            const score = scores[charater];

            if(score) {
                totalScore += score;
            }
        }
        result.push(totalScore);
    }

    return result;
}

// console.log(solution(
//     ["may", "kein", "kain", "radi"],
//     [5, 10, 1, 3],
//     [
//       ["may", "kein", "kain", "radi"],
//       ["may", "kein", "brin", "deny"],
//       ["kon", "kain", "may", "coni"]
//     ]
//   )
// ) // [19, 15, 6]
// console.log(solution(
//     ["kali", "mari", "don"],
//     [(11, 1, 55)],
//     [
//       ["kali", "mari", "don"],
//       ["pony", "tom", "teddy"],
//       ["con", "mona", "don"]
//     ]
//   )
// ) // [67, 0, 55]
// console.log(solution(
//     ["may", "kein", "kain", "radi"],
//     [5, 10, 1, 3)],
//     [
//       ["may"], 
//       ["kein", "deny", "may"], 
//       ["kon", "coni"]
//     ]
//   )
// ) // [5, 15, 0];