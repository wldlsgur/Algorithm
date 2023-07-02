import java.util.*;
class Solution {
    public int solution(int n) {
        int answer = 0;
        int cnt = 1;
        String binaryN = Integer.toBinaryString(n);
        int binaryNLength = binaryN.length() - binaryN.replace("1", "").length();


        while(true){
            String number = Integer.toBinaryString(n+cnt);
            int length = number.length() - number.replace("1", "").length();
        
            if(binaryNLength == length && n < n+cnt){
                answer = n+cnt;
                break;
            }
            cnt++;
        }


        return answer;
    }
}