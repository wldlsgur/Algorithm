import java.util.Scanner;
import java.util.Scanner;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.IOException;
public class Main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int a, b;
		
		a = sc.nextInt();
		b = sc.nextInt();
		
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		bw.write((a+b) + "\n");
		bw.write((a-b) + "\n");
		bw.write((a*b) + "\n");
		bw.write((a/b) + "\n");
		bw.write((a%b) + "\n");
 
		bw.flush();
		bw.close();
	}

}