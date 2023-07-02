package D3;
import java.util.*;

public class PlaceLookOnChessboard {
    private Scanner sc = new Scanner(System.in);
    private char[][] arr;
    private int n;
    public static void main(String[] args) {
        PlaceLookOnChessboard placeLookOnChessboard = new PlaceLookOnChessboard();
        placeLookOnChessboard.inputArray();
        placeLookOnChessboard.checkAnswer();
        // placeLookOnChessboard.printArray();
    }

    PlaceLookOnChessboard() {
        this.n = sc.nextInt();
        sc.nextLine();
        arr = new char[8*this.n][8];
    }

    void inputArray(){
        String str;

        for(int i=0 ; i<8*this.n ; i++){
            str = sc.nextLine();
            for(int j=0 ; j<8 ; j++){
                   arr[i][j] = str.charAt(j);
            }
        }
        
    }

    void checkAnswer(){
        int Ocnt = 0;
        int []circleCnt = new int[2];
        Arrays.fill(circleCnt, 0);
        int cnt = 1;
        String answer = "";

        for(int i=0 ; i<8*this.n ; i++){
            for(int j=0 ; j<8 ; j++){
                if(arr[i][j] == 'O'){
                    circleCnt[0]++;
                    circleCnt[1] += j;
                }
            }
            if(circleCnt[0] == 1) Ocnt++;
            circleCnt[0] = 0;

            if((i+1) % 8 == 0){
                    if(Ocnt != 8 || circleCnt[1] != 28){
                        answer = " no";
                    }
                    else{
                        answer = " yes";
                    }
                    System.out.println("#" + cnt + answer);

                    Ocnt = 0;
                    cnt++;
                    Arrays.fill(circleCnt, 0);
                }
        }
    }

    // void printArray(){
    //     System.out.println("출력 결과");
    //     for(int i=0 ; i<8*this.n ; i++){
    //         for(int j=0 ; j<8 ; j++){
    //             System.out.print(arr[i][j]);
    //         }
    //         System.out.println();
    //     }
    // }
}
