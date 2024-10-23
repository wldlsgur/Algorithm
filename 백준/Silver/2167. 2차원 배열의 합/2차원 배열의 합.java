import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        //배열의 인덱스를 1부터 시작하기 위해 n+1,m+1 크기로 배열 생성
        //0번 인덱스의 값은 0으로 나둔다.
        int[][] arr = new int[n+1][m+1];
        int[][] dp = new int[n+1][m+1];

        //행별로 합을 구해서 dp[][] 배열에 저장한다
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                    arr[i][j] = sc.nextInt();

                    // 각 행 별로 부분합을 구한다
                    dp[i][j] = arr[i][j] + dp[i][j-1];	//0번 인덱스가 있기 때문에 j-1을 해도 에러가 안난다
            }
        }

        int k = sc.nextInt();
        int[] sum = new int[k];    //결과 값을 담을 배열

        for (int t = 0; t < k; t++) {
            int i = sc.nextInt();
            int j = sc.nextInt();
            int x = sc.nextInt();
            int y = sc.nextInt();

            for (int row = i; row <= x; row++) {
            //각 행 별로 원하는 부분합을 가져와서 sum 배열에 넣는다
                sum[t] += dp[row][y] - dp[row][j-1];
            }

        }

        for (int i = 0; i < k; i++) {
            System.out.println(sum[i]);
        }

    }
}