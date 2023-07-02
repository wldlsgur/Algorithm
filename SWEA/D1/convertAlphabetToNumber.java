package D1;

import java.util.*;

public class convertAlphabetToNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();

        char[] charArr = str.toCharArray();

        for(char ch : charArr){
            int ascii = (int) ch;
            int number = ascii - 64;
            System.out.print(number + " ");
        }
    }
}
