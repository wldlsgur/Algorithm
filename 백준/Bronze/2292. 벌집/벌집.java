import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Start st = new Start();// TODO Auto-generated method stub
		st.Calculation();
	}

}
class Start {
	private int n;
	private Scanner sc = new Scanner(System.in);
	
	Start(){
		this.n = sc.nextInt();
	}
	
	void Calculation() {
		int cnt = 1;
		int start_n = 2;
		
		if(this.n == 1) {
			System.out.print(1);
			return;
		}
	
		while(start_n <= n) {
			start_n += cnt * 6;
			cnt++;
		}
		System.out.print(cnt);
		
	}
	
}