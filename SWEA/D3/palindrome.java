package D3;
import java.util.*;

public class palindrome {
    static String[][] numbers = new String[8][8];
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = 10;

        for(int tc=1 ; tc<=T ; tc++){
            int result = 0;
            int length = Integer.valueOf(sc.nextLine());
            for(int i=0; i<8 ; i++){
                String input = sc.nextLine();
                for(int j = 0; j < 8; j++){
                    numbers[i][j] = Character.toString(input.charAt(j));
                }
            }

            for(int i=0; i<8 ; i++){
                for(int j=0; j<8 ; j++){
                    String rowStr = "";
                    String columnStr = "";

                    if(j + length <= 8){ // check Row
                        for(int k=j ; k<j + length ; k++){
                            rowStr += numbers[i][k];
                        }
                    }
                    if(i + length <= 8){ // check Column
                        for(int k=i ; k<i + length ; k++){
                            columnStr += numbers[k][j];
                        }
                    }

                    if(!rowStr.equals("")){
                        String ReversedRow = new StringBuilder(rowStr).reverse().toString();
                        if(ReversedRow.equals(rowStr)) result++;
                    } 
                    if(!columnStr.equals("")){
                        String ReversedColumn = new StringBuilder(columnStr).reverse().toString();
                        if(ReversedColumn.equals(columnStr)) result++;
                    }
                }
            }
            System.out.println("#" + tc + " " + result);
        }
    }
}
