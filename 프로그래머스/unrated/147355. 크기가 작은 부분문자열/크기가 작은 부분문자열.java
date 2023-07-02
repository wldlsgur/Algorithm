class Solution {
        public int solution(String t, String p) {
        int answer = 0;
        int pLength = p.length();
        long pNumber = Long.valueOf(p);

        for(int i=0 ; i<t.length()-pLength+1 ; i++){
            long number = Long.valueOf(t.substring(i, i+pLength));

            if(pNumber >= number){
                answer++;
            }
        }
        return answer;
    }
}