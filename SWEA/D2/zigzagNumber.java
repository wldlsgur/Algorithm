package D2;

import java.util.*;

public class zigzagNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine();

        for(int test_case = 1 ; test_case <= t ; test_case++){
            int result = 0;
            int number = Integer.valueOf(sc.nextLine());

            for(int i=1 ; i<=number ; i++){
                if(i % 2 == 0) result = result - i;
                else result = result + i;
            }

            System.out.println("#" + test_case + " " + result);
        }
    }
}
