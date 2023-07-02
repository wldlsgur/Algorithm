package D3;
import java.util.*;

public class groupAssignment {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.valueOf(sc.nextLine());

        for(int tc=1; tc<=T ; tc++){
            int studentsCount = Integer.valueOf(sc.nextLine());
            int result = studentsCount / 3;

            System.out.println("#" + tc + " " + result);
        }
    }
}
