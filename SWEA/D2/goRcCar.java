package D2;

import java.util.*;

public class goRcCar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
        sc.nextLine();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            int N = sc.nextInt();
            sc.nextLine();
            int totalDistance = 0;
            int speed = 0;

            for(int i=0; i<N ; i++){
                int order = sc.nextInt();
                int distance = 0;
                if (order != 0) {
                    distance = sc.nextInt();
                }
                sc.nextLine();

                if(order == 1){
                    speed += distance;
                }
                else if(order == 2){
                    speed -= distance;
                    if(speed < 0) {
                        speed = 0;
                    }
                }
                totalDistance += speed;
            }
            System.out.println("#" + test_case + " " + totalDistance);
		}
    }
}