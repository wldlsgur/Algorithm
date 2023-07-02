package D1;

import java.util.*;

public class RockPaperScissors {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        char result = ' ';

        if(a == 1){
            if(b == 2){
                result = 'B';
            }
            if(b == 3){
                result = 'A';
            }
        }
        if(a == 2){
            if(b == 1){
                result = 'A';
            }
            if(b == 3){
                result = 'B';
            }
        }
        if(a == 3){
            if(b == 1){
                result = 'B';
            }
            if(b == 2){
                result = 'A';
            }
        }
        System.out.print(result);
    }
}
