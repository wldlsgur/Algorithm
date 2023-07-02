package D2;

import java.util.*;

public class Base64Decoder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine();

        for(int test_case = 1 ; test_case <= t ; test_case++){
            String encode = sc.nextLine();
            String decode = new String(Base64.getDecoder().decode(encode));

            System.out.println("#" + test_case + " " + decode);
        }
    }
}