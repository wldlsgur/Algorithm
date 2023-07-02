package D3;
import java.util.*;

public class exerciseManagement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for(int tc=1 ; tc<=T ; tc++){
            int moreNumber = sc.nextInt();
            int belowNumber = sc.nextInt();
            int weekNumber = sc.nextInt();
            
            int result = 0;
            if(moreNumber <= weekNumber && weekNumber <= belowNumber ){ // 적당량 채운 경우
                result = 0;
            }
            else if(moreNumber > weekNumber){ // 못채운 경우
                result = moreNumber - weekNumber;
            }
            else if(belowNumber < weekNumber){ // 넘은 경우
                result = -1;
            }
            System.out.println("#" + tc + " " + result);
        }
    }
}
