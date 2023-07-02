import java.util.*;

class Solution {
public String solution(String s) {
        String answer = "";
        String []arr = s.split(" ");

        for(int i=0 ; i<arr.length ; i++){
            if(arr[i].length() == 0){
                answer += " ";
            }
            else{
                String first = arr[i].substring(0, 1);
                String remain = arr[i].substring(1);

                answer += first.toUpperCase();
                answer += remain.toLowerCase();
                answer += " ";
            }
        }
        if(s.substring(s.length() -1, s.length()).equals(" ")) return answer;
        return answer.substring(0, answer.length()-1);
    }
}