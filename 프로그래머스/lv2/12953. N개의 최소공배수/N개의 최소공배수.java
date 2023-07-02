class Solution {
    public int solution(int[] arr) {
        int answer = arr[0];
        
        // 2. 배열의 길이가 1이면 반복x, 그 이상은 다음 인덱스인 1부터 반복.
        for(int i = 1;i<arr.length;i++){
            // 3. 두 값의 최대공약수
            int gcd = gcd(answer,arr[i]);// 최대공약수를 찾음
            // 4. 두 값의 최소공배수
            answer = answer * arr[i] / gcd;// 최소공배수 공식이다. 두 수의 곲 나누기 최대 공약수
        }
        
        return answer;
    }

    public int gcd(int a, int b){
        int x = Math.max(a,b);
        int y = Math.min(a,b);
        
        while(x % y != 0){//큰수 나누기 작은 수 나머지가 0이 될때까지 반복
            int r = x % y;//r은 나머지
            x = y;// 나눈 값이랑
            y = r;// 나머지 결과
        }
        
        return y;
    }
}