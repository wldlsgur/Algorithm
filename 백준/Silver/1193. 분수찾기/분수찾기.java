import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Start st = new Start();
		st.Calculation();
	}
}

class Start {
	private Scanner sc = new Scanner(System.in);
	private int x;
	
	Start(){
		this.x = sc.nextInt();
	}
	
	void Calculation() {
		int index = 0;//어느 라인인지 인덱스
		int sum;//이전 라인의 갯수를 담는다
		
		while(true) {//어느 라인에 들어갈지
			index++;
			sum = index * (index + 1) / 2;//각 행 마다 1부터 n까지의 합 즉 몇개가 있는지 확인 후 sum에 누적
			if(x <= sum) break;//10입력시 10보다 큰 라인에서 break;
		}
		
		//그 라인에서 몇 번째 값인가
		int resultIndex = x - (index - 1) * index /2;//입력 x에서 이전까지 그룹의 총 노드 갯수를 뺸다 
		if(index % 2 == 0) System.out.printf("%d/%d", resultIndex, index - resultIndex + 1);
		else System.out.printf("%d/%d", index - resultIndex + 1, resultIndex);
	}
}