package D2;

import java.util.*;

public class SortNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            int n = sc.nextInt();
            ArrayList<Integer> arrayList = new ArrayList<Integer>(n);
            sc.nextLine();

            for(int i=0; i<n ; i++){
                arrayList.add(sc.nextInt());
            }
            sc.nextLine();
            Collections.sort(arrayList);
            
            System.out.print("#" + test_case);
            for(int number : arrayList){
                System.out.print(" " + number);
            }
            System.out.println();  
        }
    }
}
