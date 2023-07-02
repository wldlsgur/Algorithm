package D2;

import java.util.*;

public class whereCanWordsFit {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
        sc.nextLine();

		for(int test_case = 1; test_case <= T; test_case++) {
            int N = sc.nextInt(); // 퍼즐의 크기
            int K = sc.nextInt(); // 찾아야 할 단어의 길이
            int[][] puzzle = new int[N][N]; // 퍼즐의 모양
            int result = 0; // 결과 변수 초기화

            // 퍼즐 모양 입력
            for(int i = 0; i < N; i++) {
                for(int j = 0; j < N; j++) {
                    puzzle[i][j] = sc.nextInt();
                }
            }     

            // 가로 방향으로 찾기
            for(int i = 0; i < N; i++) {
                int cnt = 0; // 현재 행에서 연속된 1의 개수
                for(int j = 0; j < N; j++) {
                    if(puzzle[i][j] == 1) {
                        cnt++;
                        if(cnt == K) {
                            if(j == N-1 || puzzle[i][j+1] == 0) {
                                result++;
                            }
                        }
                    } else {
                        cnt = 0;
                    }
                }
            }

            // 세로 방향으로 찾기
            for(int i = 0; i < N; i++) {
                int cnt = 0; // 현재 열에서 연속된 1의 개수
                for(int j = 0; j < N; j++) {
                    if(puzzle[j][i] == 1) {
                        cnt++;
                        if(cnt == K) {
                            if(j == N-1 || puzzle[j+1][i] == 0) {
                                result++;
                            }
                        }
                    } else {
                        cnt = 0;
                    }
                }
            }
            System.out.println("#" + test_case + " " + result);
        }
    }
}
