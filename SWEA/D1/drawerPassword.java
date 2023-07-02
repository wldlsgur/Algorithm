package D1;

import java.util.*;

public class drawerPassword {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int password = sc.nextInt();
        int k = sc.nextInt();

        System.out.print(password - k + 1);
    }
}
