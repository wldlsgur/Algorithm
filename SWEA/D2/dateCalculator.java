package D2;

import java.util.*;

public class dateCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
        sc.nextLine();

        HashMap<Integer, Integer> HashMap = new HashMap<Integer, Integer>(){{
            put(1, 31); put(2, 28); put(3, 31); put(4, 30); put(5, 31); put(6, 30); put(7, 31); put(8, 31); put(9, 30); put(10, 31); put(11, 30);   put(12, 31);
        }};

		for(int test_case = 1; test_case <= T; test_case++)
		{
                String[] date = sc.nextLine().split(" ");
                int month1 = Integer.valueOf(date[0]);
                int day1 = Integer.valueOf(date[1]);
                int month2 = Integer.valueOf(date[2]);
                int day2 = Integer.valueOf(date[3]);
                int sum = 0;
                
                for(int i=month1 ; i<=month2 ; i++){
                    if(i == month1){
                        sum += HashMap.get(i) - day1 + 1;
                    }
                    else if(i == month2){
                        sum += day2;
                    }
                    else{
                        sum += HashMap.get(i); 
                    }
                }
                System.out.println("#" + test_case + " " + sum);
        }
    }
}
