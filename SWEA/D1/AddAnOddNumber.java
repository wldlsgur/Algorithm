package D1;
import java.util.*;

public class AddAnOddNumber {
    private static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        int n;
        ArrayList arrayList = new ArrayList<ArrayList<Integer>>();

        n = sc.nextInt();
        sc.nextLine();

        // Input
        for(int i=0 ; i<n ; i++){
            ArrayList<Integer> innerList1 = new ArrayList<>();

            for(int j=0 ; j<10 ; j++){
                int number = sc.nextInt();

                innerList1.add(number);
            }
            sc.nextLine();
            arrayList.add(innerList1);
        }

        // Print
        for (int i = 0; i < arrayList.size(); i++) {
            int sum = 0;
            ArrayList<Integer> list = (ArrayList<Integer>) arrayList.get(i);

            for (int j = 0; j < list.size() ; j++) {
                int number = list.get(j);

                if (number % 2 != 0){
                    sum += number;
                }
            }

            System.out.println("#" + (i+1) + " " + sum);
        }
    }
}