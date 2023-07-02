package D2;

import java.util.*;

public class beautifulStoneThrow {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            int n = sc.nextInt();
            ArrayList<Integer> arrayList = new ArrayList<Integer>();
            sc.nextLine();

            for(int i=0 ; i<n ; i++){
                arrayList.add(sc.nextInt());
            }
            sc.nextLine();

            int min = 9999999;
            int count = 0;

            for(int number : arrayList){
                if(min > Math.abs(number - 0)){
                    min = Math.abs(number - 0);
                }
            }
            for(int number : arrayList){
                if(min == Math.abs(number - 0)){
                    count++;
                }
            }
            System.out.println("#" + test_case + " " + min + " " + count);
            arrayList.clear();;
        }
    }   
}
