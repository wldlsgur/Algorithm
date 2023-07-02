package D1;

import java.util.*;

public class PrintQuotientAndRemainder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
        sc.nextLine();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            int number1 = sc.nextInt();
            int number2 = sc.nextInt();
            sc.nextLine();

            System.out.println("#" + test_case + " " + (number1 / number2) + " " + (number1 % number2));
        }
    }
}
