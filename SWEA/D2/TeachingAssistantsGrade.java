package D2;

import java.util.*;

public class TeachingAssistantsGrade {
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		String[] credit = {"D0", "C-", "C0", "C+", "B-", "B0", "B+", "A-", "A0", "A+"}; 

        int T = sc.nextInt();
        sc.nextLine();
		for (int tc = 1; tc <= T; tc++) {	
            int a, b, c;
			int n = sc.nextInt();
			int k = sc.nextInt();
			double[] scores = new double[n];

			for (int i = 0; i < n; i++) {
				a = sc.nextInt();
				b = sc.nextInt();
				c = sc.nextInt();
				scores[i] = 0.35*a + 0.45*b + 0.2*c;
			}
			
			String result = "";
			double goal = scores[k-1];
			Arrays.sort(scores);

			for (int i = 0; i < n; i++) {
				if (goal == scores[i]) {
                    result = credit[i/(n/10)];
                    break;
				}
			}
			System.out.println("#" + tc + " " + result);
		}
	}
}