package D3;
import java.util.*;

public class harvestCrops {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.valueOf(sc.nextLine());

        for(int tc=1 ; tc<=T ; tc++){
            int N = Integer.valueOf(sc.nextLine());
            char[][] arr = new char[N][N];
            
            for(int i=0 ; i<N ; i++){
                arr[i] = sc.nextLine().toCharArray();
            }

            int center = N / 2;
            int range = 0;
            int result = 0;
           for (int i = 0; i < N; i++) {
                for (int j = center - range; j <= center + range; j++) {
                    result += arr[i][j] - '0';
                }
                if (i < center) {
                    range++;
                } else {
                    range--;
                }
            }
            System.out.println("#" + tc + " " + result);
        }
    }
}