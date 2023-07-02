package D2;

import java.util.*;

public class fareCompetition {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
        sc.nextLine();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            int P = sc.nextInt(); // A사 1L당 요금
            int Q = sc.nextInt(); // B사 기본 요금
            int R = sc.nextInt(); // B사 기본요금 초과 시점
            int S = sc.nextInt(); // B사 1L당 요금
            int W = sc.nextInt(); // 한 달간 사용하는 수도 양
            sc.nextLine();

            int aPrice = P * W;
            int bPrice = (W < R) ? Q : Q + (W - R) * S;

            System.out.println("#" + test_case + " " + ((aPrice < bPrice) ? aPrice : bPrice));
        }
    }
}
