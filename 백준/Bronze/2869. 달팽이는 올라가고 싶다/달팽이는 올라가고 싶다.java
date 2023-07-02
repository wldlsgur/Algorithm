//import java.util.Scanner;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) {
//		Scanner sc = new Scanner(System.in);
//		int a, b, v;

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		try {
			st = new StringTokenizer(br.readLine(), " ");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
		int a = Integer.parseInt(st.nextToken());
		int b = Integer.parseInt(st.nextToken());
		int v = Integer.parseInt(st.nextToken());
		
//		a = sc.nextInt();//낮
//		b = sc.nextInt();//밤
//		v = sc.nextInt();//높이
		
		int day = (v-b) / (a-b);
		if((v-b) % (a-b) == 0) {
			System.out.print(day);
			return;
		}
		System.out.print(day+1);
	}

}