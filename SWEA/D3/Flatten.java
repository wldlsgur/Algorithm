package D3;
import java.util.*;

public class Flatten {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = 10; // 테스트 케이스 개수
        
        for (int tc = 1; tc <= T; tc++) {
            int dumpCount = sc.nextInt(); // 덤프 횟수
            int[] arr = new int[100];

            for(int i=0 ; i<100 ; i++){
                arr[i] = sc.nextInt();
            }

            for(int i=0 ; i<dumpCount ; i++){
                Arrays.sort(arr);
                arr[0]++;
                arr[99]--;
            }
            Arrays.sort(arr);
            System.out.println("#" + tc + " " + (arr[99] - arr[0]));
        }
    }
}
