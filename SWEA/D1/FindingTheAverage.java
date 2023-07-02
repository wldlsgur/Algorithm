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
            int sum = 0;

            for(int i=0 ; i<10 ; i++){
                int number = sc.nextInt();

                sum += number;
            }
            sc.nextLine();

            double ave = (double) sum / 10;
            int result = (int) Math.round(ave);
            System.out.println("#" + test_case + " " + result);
		}
	}
}