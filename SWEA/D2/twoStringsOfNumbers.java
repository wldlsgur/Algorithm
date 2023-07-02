package D2;

import java.util.*;;

public class twoStringsOfNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
        sc.nextLine();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            int N = sc.nextInt();
            int M = sc.nextInt();
            int[] arrA = new int[N];
            int[] arrB  = new int[M];
            sc.nextLine();

            for(int i=0; i<N ; i++) arrA[i] = sc.nextInt();
            sc.nextLine();
            for(int i=0 ; i<M ; i++) arrB[i] = sc.nextInt();
            sc.nextLine();

            int Max = 0;

            if(M > N){
                for(int i=0 ; i<M - N + 1 ; i++){
                    int sum = 0;

                    for(int j=0 ; j<N ; j++){
                        sum += arrA[j] * arrB[i + j];
                    }
                    Max = (Max < sum) ? sum : Max; 
                }
            }
            else if(M < N){
                 for(int i=0 ; i<N - M + 1 ; i++){
                    int sum = 0;

                    for(int j=0 ; j<M ; j++){
                        sum += arrA[i + j] * arrB[j];
                    }
                    Max = (Max < sum) ? sum : Max; 
                }
            }
            else{
                int sum = 0;
                
                for(int i=0 ; i<N ; i++){
                    sum += arrA[i] * arrB[i];
                }
                Max = (Max < sum) ? sum : Max; 
            }
            System.out.println("#" + test_case + " " + Max);
		}
    }
}
