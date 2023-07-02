package D2;

import java.util.*;

public class visualAddition {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine();

        for(int tc=1 ; tc<=T ; tc++){
            Problem problem = new Problem(sc);
            problem.InputTime();
            problem.Calculate();
            problem.PrintResult(tc);
        }
    }
}

class Problem {
    Scanner sc;
    int clock1; int minutes1;
    int clock2; int minutes2;
    int resultClock; int resultMinutes;

    Problem(Scanner sc) {
        this.sc = sc;
    }

    void InputTime() {
        String[] str = sc.nextLine().split(" ");

        this.clock1 = Integer.valueOf(str[0]);
        this.minutes1 = Integer.valueOf(str[1]);
        this.clock2 = Integer.valueOf(str[2]);
        this.minutes2 = Integer.valueOf(str[3]);
    }

    void Calculate() {
        int sum = (clock1 * 60 + minutes1) + (clock2 * 60 + minutes2);

        this.resultClock = sum / 60;
        this.resultMinutes = sum % 60;
    }

    void PrintResult(int tc) {
        if(resultClock > 12) resultClock = resultClock - 12;
        System.out.println("#" + tc + " " + resultClock + " " + resultMinutes);
    }

}