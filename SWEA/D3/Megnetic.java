package D3;
import java.util.*;

public class Megnetic {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = 10;

        for(int tc=1 ; tc<=T ; tc++){
            int [][] arr = new int[100][100];
            int answer = 0;
            int N = sc.nextInt();
            for(int i=0 ; i<100 ; i++){
                for(int j=0 ; j<100 ; j++){
                    arr[i][j] = sc.nextInt();
                }
            }

            for(int i=0 ; i<100 ; i++){
                Boolean isRed = false;
                for(int j=0 ; j<100 ; j++){
                    if(arr[j][i] == 1){
                        isRed = true;
                    }
                    else if(arr[j][i] == 2 && isRed){
                        answer++;
                        isRed = false;
                    }
                }
            }
            System.out.println("#" + tc + " " + answer);
        }
    }
}