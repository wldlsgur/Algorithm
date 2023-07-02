import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class passwordgGenerator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = 10;

        for (int tc = 1; tc <= T; tc++) {
            Queue<Integer> queue = new LinkedList<Integer>();
            int test_case = sc.nextInt();
            for (int i = 0; i < 8; i++) {
                queue.offer(sc.nextInt());
            }

            // int count = 1;
            Boolean isDone = false;
            while (isDone == false) {
                for(int i=0 ; i<5 ; i++){
                    int first = queue.poll();
                    first -= i + 1;

                    if(first <= 0){
                        first = 0;
                        queue.offer(first);
                        isDone = true;
                        break;
                    }
                    queue.offer(first);
                }
                // int num = queue.poll();
                // num -= count++;
                // if (num <= 0) {
                //     num = 0;
                //     queue.offer(num);
                //     break;
                // }
                // queue.offer(num);
                // if (count == 6) {
                //     count = 1;
                // }
            }

            System.out.print("#" + test_case);
            for (int i = 0; i < 8; i++) {
                System.out.print(" " + queue.poll());
            }
            System.out.println();
        }
    }
}
