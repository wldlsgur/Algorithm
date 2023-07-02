package D2;

import java.util.*;

public class FindAverage {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for(int j=1 ; j<=T ; j++){
            ArrayList<Integer> arrayList = new ArrayList<Integer>();

            for(int i=0 ; i<10 ; i++){
                arrayList.add(sc.nextInt());
            }

            Collections.sort(arrayList);
            arrayList.remove(0); // 첫 번째 요소 제거
            arrayList.remove(arrayList.size()-1); // 마지막 요소 제거

            int sum = 0;
            for(Integer number : arrayList){
                sum += number;
            }
            Double result = (double)sum / (double)arrayList.size();
            System.out.println("#" + j + " " + Math.round(result));
        }
    }
}
