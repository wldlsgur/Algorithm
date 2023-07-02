import java.util.*;

class Solution {
public int solution(int[] people, int limit) {
        int answer = 0;
        int minIndex = 0;
        int max = people.length-1;
        
        Arrays.sort(people);
        for(int i=max ; i>=minIndex ; i--){
            if(people[i] + people[minIndex] <= limit){
                answer++;
                minIndex++;
            }else{
                answer++;
            }
        }

        return answer;
    }
}