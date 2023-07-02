package D3;
import java.util.Scanner;


public class LearningEnglish {
    public static void main(String[] args) {
        Alpabet alpabet = new Alpabet();
        alpabet.Input();
        alpabet.Calculation();
        alpabet.Print();
    }
}

class Alpabet{
    private Scanner sc = new Scanner (System.in);
    private int n;
    private char alpa;
    private String[] arr;
    private int[][] result;

    Alpabet(){
        this.n = sc.nextInt();
        sc.nextLine();
        arr = new String[n];
        result = new int[n][2];
    }

    void Input(){
        for(int i=0 ; i<n ; i++){
            arr[i] = sc.nextLine();
        }
    }

    void Calculation(){
        for(int i=0 ; i<n ; i++){
            alpa = 97;
            for(int j=0 ; j<arr[i].length() ; j++){
                if(arr[i].charAt(j) == alpa){
                    if(j == arr[i].length()-1){
                        result[i][0] = i+1;
                        result[i][1] = j+1;
                        break;
                    }
                    alpa++;
                }
                else{
                    result[i][0] = i+1;
                    result[i][1] = j;
                    break;
                }
            }
        }
    }

    void Print(){
        for(int i=0 ; i<n ; i++){
            System.out.println("#"+result[i][0] + " " + result[i][1]);
        }
    }
}