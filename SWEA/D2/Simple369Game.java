package D2;

import java.util.*;

public class Simple369Game {
    public static void main(String[] args) {
        Problem problem = new Problem();
        problem.InputN();
        problem.PrintResult();
    }
}

class Problem {
    Scanner sc;
    int N;

    Problem() {
        this.sc = new Scanner(System.in);
    }

    void InputN() {
        this.N = sc.nextInt();
    }

    void PrintResult(){
        for(int i=1 ; i<=N ; i++){
            String number = String.valueOf(i);

            if(number.contains("3") || number.contains("6") || number.contains("9")){
                String[] arr = number.split("");

                for(int j=0 ; j<arr.length ; j++){
                    if(Integer.valueOf(arr[j]) % 3 == 0 && !arr[j].equals("0")){
                        System.out.print("-");
                    }
                }
                System.out.print(" ");
            }
            else {
                System.out.print(i + " ");
            }
        }
    }
}
