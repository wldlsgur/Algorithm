package D1;

import java.util.*;

public class DoubleDouble {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int result = 1;

        System.out.print(1 + " ");
        for(int i=1 ; i<=n ; i++){
            result = result * 2;
            System.out.print(result + " ");
        }
    }
}