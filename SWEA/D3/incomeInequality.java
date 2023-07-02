package D3;
import java.util.*;

public class incomeInequality {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for(int tc=1; tc<=T; tc++) {
            int N = sc.nextInt();
            int[] arr = new int[N];
            int sum = 0;

            for(int i=0; i<N; i++) {
                arr[i]=sc.nextInt();
                sum += arr[i];
            }

            int count = 0;

            for(int i=0 ; i<arr.length ; i++){
                if((arr[i] * N) <= sum) count++;
            }
            System.out.println("#" + tc + " " + count);
        }
    }
}
