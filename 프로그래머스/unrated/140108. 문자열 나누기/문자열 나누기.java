class Solution {
          public int solution(String s) {
        int answer = 0;
        int same = 0;
        int different = 0;
        char ch = s.charAt(0);
        for (int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == ch){
                same++;
            }
            else{
                different++;
            }
            if(same == different){
                answer++;
                same = 0;
                different = 0;
                if (i + 1 < s.length()) {
                    ch = s.charAt(i+1);
                }
            }
            else if(i == s.length()-1){
                answer++;
            }
        }
        return answer;
    }
}