package D3;
import java.util.*;

public class maximumPrize {
    static int N;
    static int answer;
    static char[] card;
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        
        for (int test_case = 1; test_case <= T; test_case++) {
            card = sc.next().toCharArray();
            N = sc.nextInt();
            
            answer = 0;
            dfs(0, 0);
            
            System.out.printf("#%d %d%n", test_case, answer);
        }
        
        sc.close();
    }
    
    public static void dfs(int idx, int cnt) {
        // 교환 횟수를 모두 사용한 경우
        if (cnt == N) {
            int num = Integer.parseInt(new String(card));
            answer = Math.max(answer, num);
            return;
        }
        
        // 현재 인덱스부터 마지막 인덱스까지 반복
        for (int i = idx; i < card.length; i++) {
            for (int j = i + 1; j < card.length; j++) {
                // i번째와 j번째 카드의 순서를 바꾸기
                char temp = card[i];
                card[i] = card[j];
                card[j] = temp;
                // 교환 횟수를 1 증가시키고 다음 인덱스 탐색
                dfs(i, cnt + 1);
                
                // 원래 순서로 복원
                temp = card[i];
                card[i] = card[j];
                card[j] = temp;
            }
        }
    }
}
// 32888 / 2