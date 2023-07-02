package D2;

import java.util.*;

public class patternDefinitionLength {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
        sc.nextLine();

		for(int test_case = 1; test_case <= T; test_case++)
		{  
            String str = sc.nextLine();
            
            for(int i=1 ; i<=str.length() ; i++){
                String temp1 = str.substring(0, i);
                String temp2 = str.substring(i, i + i);

                if(temp1.equals(temp2)){
                    System.out.println("#" + test_case + " " + temp1.length());
                    break;
                }
            }
        }
    }
}
// KOREAKOREAKOREAKOREAKOREAKOREA

