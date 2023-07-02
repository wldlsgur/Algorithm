package D3;
import java.util.*;

public class palindrome2 {
    static String[][] arr;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = 10;

        for(int tc=1 ; tc<=T ; tc++){
            arr = new String[100][100];
            String test_case = sc.nextLine();

            for(int i=0 ; i<100 ; i++){
                String line = sc.nextLine();
                for(int j=0; j<100 ; j++){
                    arr[i][j] = Character.toString(line.charAt(j));
                }
            }

            int max = 0;
            for(int i=0 ; i<100 ; i++){ 
                for(int j=0 ; j<100 ; j++){ 
                    String rowStr = "";
                    String colStr = "";

                    for(int z=j ; z<100 ; z++){ // 가로
                        rowStr += arr[i][z];
                        if(rowStr.equals(new StringBuilder(rowStr).reverse().toString())){
                            if(max < rowStr.length()){
                                max = rowStr.length();
                            }
                        }
                    }
                    rowStr = "";

                    for(int z=j ; z<100 ; z++){ // 가로
                        colStr += arr[z][i];
                        if(colStr.equals(new StringBuilder(colStr).reverse().toString())){
                            if(max < colStr.length()){
                                max = colStr.length();
                            }
                        }
                    }
                    colStr = "";
                }
            }
            System.out.println("#" + test_case + " " + max);
        }
    }
}
