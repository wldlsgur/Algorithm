
import java.util.*;

class Solution {
    public int solution(int n) {
        int answer = 0;
        ArrayList<Integer> arrlist = new ArrayList<Integer>();

        for(int i=0 ; i<=n ; i++){
            if(i==0) arrlist.add(0);
            if(i==1) arrlist.add(1);
            if(i>=2){
                arrlist.add((arrlist.get(i-1) + arrlist.get(i-2)) % 1234567);//1234567로 나눈 나머지로 하지 않으면 정수범위 초과
            }
        }
        answer = arrlist.get(n);
        return answer;
    }
}