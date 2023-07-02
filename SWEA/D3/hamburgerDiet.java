package D3;
import java.util.*;

public class hamburgerDiet {
    static int N;
    static int L;
    static int[] score;
    static int[] kcal;
    static int answer;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for(int tc=1 ; tc<=T ; tc++){
            N = sc.nextInt(); // 재료 수
            L = sc.nextInt(); // 제한 칼로리
            score = new int[N];
            kcal = new int[N];
            answer = 0;

            for(int i=0 ; i<N ; i++){
                score[i] = sc.nextInt();
                kcal[i] = sc.nextInt();
            }

            dfs(0, 0, 0);
            System.out.println("#" + tc + " " + answer);
        }
    }

    public static void  dfs(int index, int sumScore, int sumKcal){
        if(sumKcal > L) return;
        if(index == N){
            if(sumScore > answer && sumKcal <= L){
                answer = sumScore;
            }
            return;
        }
        dfs(index + 1, sumScore + score[index], sumKcal + kcal[index]);
        dfs(index + 1, sumScore, sumKcal);
    }
}
