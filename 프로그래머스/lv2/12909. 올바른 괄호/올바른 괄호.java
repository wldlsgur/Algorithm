import java.util.*;

class Solution {
    boolean solution(String s) {
        boolean answer = true;
        Stack<Character> stack = new Stack<Character>();

        //'('만 스택에 push하고 ')' 가 들어오면 스택에 (가 있으면 pop으로 한쌍 제거 없으면 false
        for(int i=0 ; i<s.length() ; i++){
            if(s.charAt(i) == '('){
                stack.push(s.charAt(i));
            }
            else{
                if(stack.isEmpty()){
                    return false;
                }
                else{
                    stack.pop();
                }
            }
        }
        answer = (stack.isEmpty() ? true : false);
        return answer;
    }
}