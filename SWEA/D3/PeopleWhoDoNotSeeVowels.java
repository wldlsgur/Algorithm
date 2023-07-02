package D3;
import java.util.*;

public class PeopleWhoDoNotSeeVowels {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.valueOf(sc.nextLine());

        for(int tc=1 ; tc<=T ; tc++){
            String str = sc.nextLine();
            String result = str.replaceAll("[aeiou]", "");
            System.out.println(("#" + tc + " " + result));
        }
    }
}
