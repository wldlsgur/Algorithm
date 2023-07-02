package D3;
import java.util.*;

public class tweentyFourHour {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.valueOf(sc.nextLine());

        for(int tc=1 ; tc<=T ; tc++){
            int nowTime = sc.nextInt();
            int addTime = sc.nextInt();
            
            int result = nowTime + addTime;
            if(result >= 24){
                result = result - 24;
            }

            System.out.println("#" + tc + " " + result);
        }
    }
}
