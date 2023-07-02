package D3;
import java.util.*;;

public class RestoringRawMaterialMemory {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.valueOf(sc.nextLine());
        
        for(int tc=1 ; tc<=T ; tc++){
            int result = 0;
            String init = "";
            String numbers = sc.nextLine();

            for(int i=0 ; i<numbers.length() ; i++){
                init += "0";
            }

            for(int i=0 ; i<init.length() ; i++){
                if(init.equals(numbers)) break;

                if(init.charAt(i) != numbers.charAt(i)){
                    result++;
                    init = init.substring(0, i);
                    for(int j=i ; j<numbers.length() ; j++){
                        init += String.valueOf(numbers.charAt(i));
                    }
                }
            }
            System.out.println("#"+ tc + " " + result);
        }
    }
}
