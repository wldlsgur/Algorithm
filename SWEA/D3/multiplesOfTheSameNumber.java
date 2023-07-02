package D3;
import java.util.*;

public class multiplesOfTheSameNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T;
		T=sc.nextInt();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            int n = sc.nextInt();
            String str = String.valueOf(n);
            String answer = "impossible";

            int i = 1;
            while(true){
                i++;
                int number = n * i;
                String numStr = String.valueOf(number);

                if(numStr.length() > str.length()) break;
                if(str.length() == 1) break;
                int cnt = 0;
                for(int j=0 ; j<str.length() ; j++){
                    String testStr = String.valueOf(numStr.charAt(j));
                    if(str.contains(testStr) == true){
                        cnt++;
                    }
                }
                if(cnt == str.length()){
                    answer = "possible";
                    break;
                }
            }
            System.out.println("#" + test_case + " " + answer);
		}
    }
}