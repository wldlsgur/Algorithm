package D2;

import java.util.*;

public class FlyFiles {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            int N = sc.nextInt();
            int M = sc.nextInt();
            int[][] arr = new int[N][N];
            sc.nextLine();

            for(int i=0 ; i<N ; i++){
                for(int j=0 ; j<N ; j++){
                    arr[i][j] = sc.nextInt();
                }
                sc.nextLine();
            }
            int max = 0;
            for(int i=0; i<=N-M ; i++){
                for(int j=0 ; j<=N-M ; j++){
                    int sum = 0;

                    for(int k=i; k<M+i ; k++){
                        for(int z=j; z<M+j ; z++){
                            sum += arr[k][z];
                        }
                    }
                    if(max < sum) max = sum;
                    sum = 0;
                }
            }
            System.out.println("#" + test_case + " " + max);
        }
    }
}
