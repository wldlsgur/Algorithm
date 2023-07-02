package D2;

import java.util.*;

public class SudokuVerification {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine();

        for(int tc=1 ; tc<=T ; tc++){
            Solution solution = new Solution(9, sc);
            solution.InputArray();
            if(solution.rowCheck() == 0 || solution.coloumCheck() == 0 || solution.gridCheck() == 0){
                System.out.println("#" + tc + " " + 0);
            }
            else{
                System.out.println("#" + tc + " " + 1);
            }
        }
    }
}

class Solution {
    private Scanner sc;
    int N;
    int[][] arr;
    HashMap<Integer, Integer> hashMap;

    Solution(int N, Scanner sc) {
        this.N = N;
        this.sc = sc;
        arr = new int[this.N][this.N];
    }

    void initHasMap() {
        this.hashMap = new HashMap<Integer, Integer>(){{
            put(1, 0);  put(2, 0); put(3, 0);   put(4, 0);  put(5, 0);  put(6, 0);  put(7, 0);  put(8, 0);  put(9, 0);
        }};
    }

    void InputArray(){
        for(int i=0 ; i<this.N ; i++){
            for(int j=0 ; j<this.N ; j++){
                arr[i][j] = sc.nextInt();
            }
            sc.nextLine();
        }
    }

    int rowCheck() {
        for(int i=0 ; i<this.N ; i++){
            this.initHasMap();

            for(int j=0 ; j<this.N ; j++){
                int key = this.arr[i][j];
                int value = this.hashMap.get(key);

                if(value == 0){
                    this.hashMap.put(key, ++value);
                }else{
                    return 0;
                }
            }
        }
        return 1;
    }

    int coloumCheck() {
        for(int i=0 ; i<this.N ; i++){
            this.initHasMap();

            for(int j=0 ; j<this.N ; j++){
                int key = this.arr[j][i];
                int value = this.hashMap.get(key);

                if(value == 0){
                    this.hashMap.put(key, ++value);
                }else{
                    return 0;
                }
            }
        }
        return 1;
    }

    int gridCheck() {
        for(int i=0 ; i<this.N ; i+=3){
            for(int j=0 ; j<this.N ; j+=3){
                this.initHasMap();
                for(int k=i ; k<i+3 ; k++){
                    for(int l=j ; l<j+3 ; l++){
                        int key = this.arr[k][l];
                        int value = this.hashMap.get(key);

                        if(value == 0){
                            this.hashMap.put(key, ++value);
                        }else{
                            return 0;
                        }
                    }
                }
            }
        }
        return 1;
    }
}