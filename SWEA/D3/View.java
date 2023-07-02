package D3;
import java.util.*;

public class View {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for(int tc=1 ; tc<=10 ; tc++){
            int N = sc.nextInt();
            int[][] arr = new int[N][];
            int result = 0;

            for(int i=0 ; i<N ; i++){
                arr[i] = new int[sc.nextInt()];
            }

            for(int i=0; i<arr.length ; i++){
                for(int j=0 ; j<arr[i].length ; j++){
                    int prev1 = (i >= 1) ? arr[i-1].length : 0;
                    int prev2 = (i >= 2) ? arr[i-2].length : 0;
                    int next1 = (i < N-1) ? arr[i+1].length : 0;
                    int next2 = (i < N-2) ? arr[i+2].length : 0;

                    if(j >= prev1 && j >= prev2 && j >= next1 && j >= next2) result++;
                }
            }
            System.out.println("#" + tc + " " + result);
        }
    }
}
