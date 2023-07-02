import java.util.*;

class Solution {
    public int[] solution(String s) {
        int[] answer = {0, 0};
        int beforLength = 0;
        int afterLength = 0;

        while(s.length() > 1){
            beforLength = s.length();
            s = s.replace("0", "");
            afterLength = s.length();
            s = Integer.toBinaryString(s.length());

            System.out.println("beforLength :" + beforLength + "\n" + "afterLength : " + afterLength);

            answer[0]++;
            answer[1] += beforLength - afterLength;
        } 

        return answer;
    }
}