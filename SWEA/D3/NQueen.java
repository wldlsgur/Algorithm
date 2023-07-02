package D3;
import java.util.*;

public class NQueen {
    static int[][] arr;
    static int N;
    static int result;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for(int tc=1; tc<=T ; tc++){
            N = sc.nextInt();
            arr = new int[N][N];
            result = 0;

            dfs(0, 0);
            System.out.println("#" + tc + " " + result);
        }
    }

    public static void dfs(int row, int current){
        if(current == N){
            result++;
            return;
        }

        for(int i=0; i<arr.length; i++){
            boolean isPossible = true;

            for(int j=1 ; j<=row ; j++){
                if(row - j >= 0){
                    if(i - j >= 0 && arr[row-j][i-j] == 1){
                        isPossible = false;
                        break;
                    }
                    if(i + j < N && arr[row-j][i+j] == 1){
                        isPossible = false;
                        break;
                    }
                    if (arr[row - j][i] == 1) { // 위쪽
                        isPossible = false;
                        break;
                    }
                }
            }

            if (isPossible) {
                arr[row][i] = 1;

                dfs(row + 1, current + 1);

                arr[row][i] = 0;
            }
        }
    }
}
