package D2;

import java.util.*;

public class newInsomniaCure {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashMap<Character, Boolean> hashMap = new HashMap<Character, Boolean>();
        int t = sc.nextInt();
        sc.nextLine();

        for(int tc = 1 ; tc <= t ; tc++){
            int N = Integer.valueOf(sc.nextLine());
            int index = 1;
            int result = 0;

            while(true){
                String str = String.valueOf(index * N);
                char[] sheep = str.toCharArray();
                
                index++;
                result++;

                for(char ch : sheep){
                    hashMap.put(ch, true);
                }

                if(hashMap.keySet().size() == 10){
                    hashMap.clear();
                    System.out.println("#" + tc + " " + str);
                    break;
                }
            }
        }
    }
}
