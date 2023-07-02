import java.util.*;

class Solution {
   public String solution(String s) {
        String answer = "";
        String[] copyArr = s.split(" ");
        int [] arr = new int[copyArr.length];

        for(int i=0 ; i<copyArr.length ; i++){
            arr[i] = Integer.parseInt(copyArr[i]);
        }

        Arrays.sort(arr);

        answer += Integer.toString(arr[0]);
        answer += " ";
        answer += Integer.toString(arr[arr.length-1]);

        return answer;
    }
}