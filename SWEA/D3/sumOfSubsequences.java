package D3;
import java.util.*;

public class sumOfSubsequences {
    static int N;
    static int K;
    static int[] arr;
    static int answer;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for(int tc=1 ; tc<=T ; tc++){
            N = sc.nextInt();
            K = sc.nextInt();
            arr = new int[N];
            answer = 0;

            for(int i=0 ; i<N ; i++){
                arr[i] = sc.nextInt();
            }

            dfs(0, 0);
            System.out.println("#" + tc + " " + answer);
        }
    }

    public static void dfs(int idx, int sum){
        if(sum > K){
            return;
        }
        if(idx == N){
            if(sum == K) answer++;
            return;
        }

        dfs(idx + 1, sum + arr[idx]);
        dfs(idx + 1, sum);
    }
}
