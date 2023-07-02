package D3;
import java.util.*;

public class CutTongnamu {
    public static void main(String[] args) {
        Game game = new Game();
        game.Input();
        game.Print();
    }
}
class Game{
    private Scanner sc = new Scanner(System.in);
    private int n;
    private int [][] arr;

    Game(){
        this.n = sc.nextInt();
        this.arr = new int[this.n][2];
    }

    void Input(){
        for(int i=0 ; i<this.n ; i++){
            arr[i][0] = sc.nextInt();
            arr[i][1] = 0;
        }
    }

    void Print(){
        for(int i=0 ; i<this.n ; i++){
            String name = (this.arr[i][0] % 2 == 0) ? "Alice" : "Bob";
            System.out.println("#" + (i+1) + " " + name);
        }
    }
}
