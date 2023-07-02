package D2;

import java.util.*;

public class simpleDecompression {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = Integer.valueOf(sc.nextLine());

        for(int tc=1 ; tc<=t ; tc++){
            int n = Integer.valueOf(sc.nextLine());
            ArrayList<Character> arrayList = new ArrayList<Character>();

            for(int i=0 ; i<n ; i++){
                String[] str = sc.nextLine().split(" ");
                char alpabet = str[0].charAt(0);
                int count = Integer.valueOf(str[1]);

                for(int j=0 ; j<count ; j++){
                    arrayList.add(alpabet);
                }
            }

            System.out.println();
            System.out.println("#" + tc);
            for(int i=0; i<arrayList.size() ; i++){
                if(i % 10 == 0 && i != 0) {
                    System.out.println();
                } 
                System.out.print(arrayList.get(i));
            }
        }
    }
}
