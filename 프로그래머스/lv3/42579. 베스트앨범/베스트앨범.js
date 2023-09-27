function solution(genres, plays) {
    const music = {};
    const play = {};

    for(let i=0 ; i<genres.length ; i++) {
        music[genres[i]] = [];
        play[genres[i]] = 0;
    }

    // 객체에 해당 장르에 [인덱스, 플레이 횟수] 요소를 삽입
    for(let i=0 ; i<plays.length ; i++) {
        music[genres[i]].push([i, plays[i]]);
        play[genres[i]] += plays[i];
    } 

    for(const key in music) {
        music[key].sort((a, b) => {
            if(b[1] === a[1]) {
                return a[0] - b[0];
            }
            return b[1] - a[1];
        })
    }

    const sortedPlay = Object.entries(play).sort((a, b) => b[1] - a[1]);
    const result = [];

    for(const [genre, _] of sortedPlay) {
        result.push(music[genre][0][0]);

        if(music[genre].length > 1) {
            result.push(music[genre][1][0]);
        }
    }

    return result;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])); // [4, 1, 3, 0]