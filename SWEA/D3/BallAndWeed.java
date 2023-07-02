package D3;
import java.lang.ProcessBuilder.Redirect.Type;
import java.util.*;

public class BallAndWeed {
    private static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        int n = sc.nextInt();
        sc.nextLine();
        String [] arr = new String[n];
        HashMap<Integer, Integer> map = new HashMap<>();

        for(int i=0 ; i<n ; i++){
            arr[i] = sc.nextLine();
            map.put(i+1, 0);
        }//ᅟInput Data

        for(int i=0 ; i<n ; i++){
            for(int j=0 ; j<arr[i].length() ; j++){
                char now = arr[i].charAt(j);
                
                if(now == '(' && j != arr[i].length()){
                    char right =  arr[i].charAt(j+1);
                    if(right == ')' || right == '|'){
                        if(map.get(i+1) != null){
                            map.put(i+1, map.get(i+1).intValue()+1);
                            j++;
                        }
                    }
                }
                else if(now == ')' && j != 0){
                    char befor = arr[i].charAt(j-1);
                    if (befor == '|'){
                        if(map.get(i+1) != null){
                            map.put(i+1, map.get(i+1).intValue()+1);
                        }
                    }
                } 
            }
        }

        for(Integer i : map.keySet()){ //저장된 key값 확인
            System.out.println("#" + i + " " + map.get(i).intValue());
        }
    }
}
