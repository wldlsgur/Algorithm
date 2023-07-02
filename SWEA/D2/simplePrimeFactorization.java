package D2;

import java.util.*;

public class simplePrimeFactorization {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashMap<Integer, Integer> hashMap = new HashMap<Integer, Integer>(){{
            put(2, 0); put(3, 0); put(5, 0); put(7, 0); put(11, 0);
        }};
		int T = sc.nextInt();
        sc.nextLine();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            String str = sc.nextLine();
            int number = Integer.valueOf(str);
            
            while(number % 2 == 0){
                number = number / 2;
                hashMap.put(2, (int) hashMap.get(2) + 1);
            }
            while(number % 3 == 0){
                number = number / 3;
                hashMap.put(3, (int) hashMap.get(3) + 1);
            }
            while(number % 5 == 0){
                number = number / 5;
                hashMap.put(5, (int) hashMap.get(5) + 1);
            }
            while(number % 7 == 0){
                number = number / 7;
                hashMap.put(7, (int) hashMap.get(7) + 1);
            }
            while(number % 11 == 0){
                number = number / 11;
                hashMap.put(11, (int) hashMap.get(11) + 1);
            }

            System.out.print("#" + test_case);
            
            for(Integer value : hashMap.values()){
                System.out.print(" " + value);
            }
            System.out.println();

            for (Integer key : hashMap.keySet()) {
                hashMap.put(key, 0);
            }
        }
    }
}
