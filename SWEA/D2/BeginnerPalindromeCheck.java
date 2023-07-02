package D2;

import java.util.*;

public class BeginnerPalindromeCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
        sc.nextLine();
        
		for(int test_case = 1; test_case <= T; test_case++)
		{
            String str = sc.nextLine().trim();
            StringBuffer sb = new StringBuffer(str);
            String reversedStr = sb.reverse().toString();

            System.out.println(str + " " + reversedStr);
            System.out.println("#" + test_case + " " + ((str.equals(reversedStr)) ? 1 : 0));
        }
    }
}
