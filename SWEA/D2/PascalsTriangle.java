package D2;

import java.util.*;

public class PascalsTriangle {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine();

        for(int tc = 1 ; tc <= T ; tc++){
            Problem problem = new Problem(sc);
            problem.InputN();
            problem.InputArray();
            System.out.println("#" + tc);
            problem.PrintArray();
        }
    }
}

class Problem{
    Scanner sc;
    int n;
    int[][] array;

    Problem(Scanner sc){
        this.sc = sc;
    }

    void InputN(){
        this.n = sc.nextInt();
        array = new int[this.n][this.n];
    }

    void InputArray(){
        array[0][0] = 1;

        for(int i=1 ; i<this.n ; i++){
            for(int j=0 ; j<=i ; j++){
                int left = 0;
                int right = 0;

                if(j-1 >= 0){
                    left = array[i-1][j-1];
                }
                if(array[i-1][j] != 0){
                    right = array[i-1][j];
                }
                System.out.println("left : " + left + "right : " + right);
                array[i][j] = left + right;
            }
        }
    }

    void PrintArray(){
        for(int i=0 ; i<this.n ; i++){
            for(int j=0 ; j<this.n ; j++){
                if(array[i][j] != 0) {
                    System.out.print(array[i][j] + " ");
                }
            }
            System.out.println();
        }
    }
}
