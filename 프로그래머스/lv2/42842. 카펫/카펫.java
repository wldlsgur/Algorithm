class Solution {
     public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int sum = brown + yellow;

        for(int i=3 ; i<=sum ; i++){//세로가 3부터 시작해야 노란색이 들어올 수 있따.
            int sero = i;
            int garo = sum / sero;

            if(garo < 3){
                continue;
            }

            if(garo>= sero){
                int y = (garo-2) * (sero-2);
                if(y == yellow){
                   answer[0] = garo;
                    answer[1] = sero;
                    return answer;
                }
            }
        }
        return answer;
    }
}