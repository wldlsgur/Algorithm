import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Start start = new Start();
		start.Input();
		start.Calculation();
	}

}
class Start{
	private Scanner sc = new Scanner(System.in);
	private long a;
	private long b;
	private long c;
	
	public Start() {
	}
	
	void Input(){
		this.a = sc.nextInt();
		this.b = sc.nextInt();
		this.c = sc.nextInt();
	}
	
	void Calculation() {
		if(this.Check() == true) {
			System.out.printf("%d", -1);
			return;
		}
		System.out.println((this.a/(this.c-this.b))+1);
//		int cnt = 0;
//
//		while(true) {
//			if(this.a + this.b * cnt <= this.c * cnt++) {
//				break;
//			}
//		}
//		System.out.printf("%d", cnt);
	}
	
	boolean Check() {
		if(this.b >= this.c) {
			return true;
		}
		return false;
	}
}