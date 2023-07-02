package D1;

import java.util.*;

class Solution
{
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
		String T = sc.nextLine();
        char[] arr = T.toCharArray();
        int result = 0;
        
        for(char ch : arr){
            result += (int) ch-'0';
        }

        System.out.println(result);
    }
}