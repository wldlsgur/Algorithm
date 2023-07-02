package D2;

import java.util.*;

public class RotateNumberArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine();

        for(int test_case = 1; test_case <= T; test_case++)
        {
            int N = sc.nextInt();
            int[][] arr = new int[N][N];
            int[][] rotated90 = new int[N][N];
            int[][] rotated180 = new int[N][N];
            int[][] rotated270 = new int[N][N];
  
            sc.nextLine();

            for(int i=0; i<N ; i++){
                for(int j=0; j<N ; j++){
                    arr[i][j] = sc.nextInt();
                }
                sc.nextLine();
            }

            // rotate 90
            for(int i=0 ; i<N ; i++){
                for(int j=0 ; j<N ; j++){
                    rotated90[i][j] = arr[N-1-j][i];
                }
            }
            // rotate 180
            for(int i=0 ; i<N ; i++){
                for(int j=0 ; j<N ; j++){
                    rotated180[i][j] = rotated90[N-1-j][i];
                }
            }
            // rotate 270
            for(int i=0 ; i<N ; i++){
                for(int j=0 ; j<N ; j++){
                    rotated270[i][j] = rotated180[N-1-j][i];
                }
            }

            System.out.println('#' + test_case);
            for(int i=0 ; i<N ; i++){
                for(int j=0 ; j<N ; j++){
                    System.out.print(rotated90[i][j]);
                }
                System.out.print(" ");
                for(int j=0 ; j<N ; j++){
                    System.out.print(rotated180[i][j]);
                }
                System.out.print(" ");
                for(int j=0 ; j<N ; j++){
                    System.out.print(rotated270[i][j]);
                }
                System.out.println();
            }

            // // Solution 2
            // System.out.println('#' + test_case);
            // for(int k=0; k<N ; k++){
            //     for(int i=N-1 ; i>=0 ; i--) System.out.print(arr[i][k]);
            //     System.out.print(" ");
            //     for(int j=N-1 ; j>=0 ; j--) System.out.print(arr[N-1-k][j]);
            //     System.out.print(" ");
            //     for(int z=0 ; z<N ; z++)  System.out.print(+ arr[z][N-1-k]);
            //     System.out.println();
            // }
        }
    }
}