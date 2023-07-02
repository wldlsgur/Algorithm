package D1;

import java.util.Scanner;
import java.io.FileInputStream;

class Solution
{
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
		int T;
		T=sc.nextInt();
        sc.nextLine();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            char result = ' ';
            int num1 = sc.nextInt();
            int num2 = sc.nextInt();
            sc.nextLine();
            
            if(num1 > num2) result = '>';
            if(num1 < num2) result = '<';
            if(num1 == num2) result = '=';

            System.out.println("#" + test_case + " " + result);
		}
	}
}