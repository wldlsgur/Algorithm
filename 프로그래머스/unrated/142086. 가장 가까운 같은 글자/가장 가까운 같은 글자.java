class Solution {
public int[] solution(String s) {
        int[] answer = new int[s.length()];
        answer[0] = -1;
        
        for (int i = 1; i < s.length(); i++) {
            int index = s.substring(0, i).lastIndexOf(s.charAt(i));

            if(index == -1){
                answer[i] = index;
            }else{
                answer[i] = i - index;
            }

        }
        return answer;
    }
}