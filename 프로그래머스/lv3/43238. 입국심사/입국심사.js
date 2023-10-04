function solution(n, times) { // n : 입국심사 기다리는 인원, times : 각 심사위원 마다 걸리는 시간
    const sortedTimes = times.sort((a, b) => a - b); // 최대시간을 구하기 위한 정렬
    let left = 1; // 심사가 걸리는 최소 시간
    let right = sortedTimes[sortedTimes.length - 1] * n; // 심사가 걸리는 최대 시간

    while(left <= right) {
        const mid = Math.floor((left + right) / 2); // 확인할 걸리는 시간
        // 확인할 걸리는 시간 / 각 심사위원들의 심사 시간 = 각 심사위원들이 해당 시간 때 심사할 수 있는 인원
        // 심사위원 마다 심사할 수 있는 인원들의 총 합이 해당 시간때 모든 심사위원들을 통해 심사할 수 있는 인원
        const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

        if(sum < n) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return left;
}

console.log(solution(6,	[7, 10])); // 28