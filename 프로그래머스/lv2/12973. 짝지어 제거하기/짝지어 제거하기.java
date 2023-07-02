import java.util.*;

class Solution
{
    public int solution(String s)
    {
        int answer = 1;
        char[] arr = s.toCharArray();
        Stack<Character> stack = new Stack<Character>();

        for(int i=0 ; i<arr.length ; i++){
            if(stack.isEmpty() == false && stack.peek() == arr[i]){
                stack.pop();
            }else{
                stack.push(arr[i]);
            }
        }
        if(stack.isEmpty() == false){
            answer = 0;
        }
        return answer;
    }
}