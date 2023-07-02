package D2;
import java.util.*;

public class millionaireProject {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        
        for(int tc=1; tc<=T ; tc++){
            int N = sc.nextInt();
            long result = 0;
            long max = 0;
            ArrayList<Long> arrayList = new ArrayList<Long>();

            // Input
            for(int i=0; i<N ; i++) arrayList.add(sc.nextLong());
            // FindMaxValue
            for(int i=0; i<arrayList.size() ; i++) if(max < arrayList.get(i)) max = arrayList.get(i);
            
            for(int i=0; i<arrayList.size() ; i++){
                long today = arrayList.get(i);

                if(max != today){
                    result += max - today;
                }
                else{
                    max = 0;
                    if(i+1 < arrayList.size()){
                        for(int j=i+1; j<arrayList.size(); j++) if(max < arrayList.get(j)) max = arrayList.get(j);
                    }
                }
            }
            System.out.println("#" + tc + " " + result);
        }
    }
}
