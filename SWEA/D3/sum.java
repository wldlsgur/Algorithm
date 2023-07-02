package D3;
import java.util.*;

public class sum{
    static int[][] arr = new int[100][100];
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = 10;

        for(int tc=1; tc<=T ; tc++){
            int n = sc.nextInt();
            // Input
            for(int i=0 ; i<arr.length ; i++){
                for(int j=0; j<arr[i].length ; j++){
                    arr[i][j] = sc.nextInt();
                }
            }

            int max = 0;
            int leftDiagonal = 0;
            int rightDiagonal = 0;
            for(int i=0 ; i<arr.length ; i++){
                int rowSum = 0;
                int colSum = 0;

                leftDiagonal += arr[0 + i][0 + i];
                rightDiagonal += arr[99 - i][99 - i];

                for(int j=0; j<arr[i].length ; j++){
                    rowSum += arr[i][j];
                    colSum += arr[j][i];
                }

                if(max < rowSum) max = rowSum;
                if(max < colSum) max = colSum;
            }
            if(max < leftDiagonal) max = leftDiagonal;
            if(max < rightDiagonal) max = rightDiagonal;

            System.out.println("#" + tc + " " + max);
        }
    }
}