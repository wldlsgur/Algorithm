package D2;

import java.util.*;

public class snailNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int test_case = 1; test_case <= T; test_case++) {
            int N = sc.nextInt();
            int[][] array = new int[N][N];

            int num = 1;
            int row = 0;
            int col = 0;
            int direction = 3;

            // 상, 하, 좌, 우 순서로 이동 방향 설정
            int[] dr = { -1, 1, 0, 0 }; // 상, 하
            int[] dc = { 0, 0, -1, 1 }; // 좌, 우

            while (num <= N * N) {
                // 현재 위치에 숫자 저장
                array[row][col] = num++;
                // 다음 위치 계산
                int nextRow = row + dr[direction];
                int nextCol = col + dc[direction];

                // 다음 위치가 배열 범위를 벗어나거나 이미 숫자가 저장된 경우, 방향 변경
                if (nextRow < 0 || nextRow >= N || nextCol < 0 || nextCol >= N || array[nextRow][nextCol] != 0) {
                    if (direction == 0) {
                        direction = 3; // direction이 0일 때, 3으로 변경
                    } else {
                        direction = (direction + 1) % 3; // 방향 변경
                    }
                    nextRow = row + dr[direction];
                    nextCol = col + dc[direction];
                }
                row = nextRow;
                col = nextCol;
            }

            System.out.println("#" + test_case);
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++) {
                    System.out.print(array[i][j] + " ");
                }
                System.out.println(); // 개행 추가
            }
        }
    }
    // public static void main(String[] args) {
    //     Scanner sc = new Scanner(System.in);
	// 	int T = sc.nextInt();

	// 	for(int test_case = 1; test_case <= T; test_case++)
	// 	{
    //         int N = Integer.valueOf(sc.nextLine());
    //         int[][] array = new int[N][N];

    //         dfs(1, 0, 0, 3, N, array);

    //         System.out.println(("#" + test_case));
    //         for(int i=0 ; i<N ; i++){
    //             for(int j=0 ; j<N ; j++){
    //                 System.out.print(array[i][j] + " ");
    //             }
    //             System.out.println();
    //         }
    //     }
    // }
    // static void dfs(int num, int row, int col, int direction, int N, int[][] arr) {
    //     if (num > N * N) return; // 종료 조건: 숫자가 N * N보다 크면 종료

    //     // 상, 하, 좌, 우 순서로 이동 방향 설정
    //     int[] dr = { -1, 1, 0, 0 }; // 상, 하
    //     int[] dc = { 0, 0, -1, 1 }; // 좌, 우

    //     // 현재 위치에 숫자 저장
    //     arr[row][col] = num;

    //     // 다음 위치 계산
    //     int nextRow = row + dr[direction];
    //     int nextCol = col + dc[direction];

    //     // 3 -> 1 -> 2 -> 0
    //     // 다음 위치가 배열 범위를 벗어나거나 이미 숫자가 저장된 경우, 방향 변경
    //     if (nextRow < 0 || nextRow >= N || nextCol < 0 || nextCol >= N || arr[nextRow][nextCol] != 0) {
    //         if (direction == 0) {
    //             direction = 3; // direction이 0일 때, 3으로 변경
    //         } else {
    //             direction = (direction + 3 - 1) % 3; // 방향 변경
    //         }
    //         nextRow = row + dr[direction];
    //         nextCol = col + dc[direction];
    //     }

    //     // DFS 호출
    //     dfs(num + 1, nextRow, nextCol, direction, N, arr);
    // }
}