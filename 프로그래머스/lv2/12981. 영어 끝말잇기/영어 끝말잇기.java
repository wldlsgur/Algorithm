import java.util.*;

class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = {0, 0};
        ArrayList<String> arrList = new ArrayList<>();
        char ch = words[0].charAt(0);

        for(int i=0 ; i< words.length ; i++){
            if(ch != words[i].charAt(0) || words[i].length() == 1 || arrList.contains(words[i]) == true){
                answer[0] = i%n+1;
                answer[1] = i/n+1;
                break;
            }
            arrList.add(words[i]);
            ch = words[i].charAt(words[i].length()-1);
        }
        return answer;
    }
}