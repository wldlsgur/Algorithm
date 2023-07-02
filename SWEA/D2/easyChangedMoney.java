package D2;

import java.util.*;

public class easyChangedMoney {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.valueOf(sc.nextLine());

        for(int tc=1 ; tc<=T ; tc++){
            Problem problem = new Problem(sc);
            problem.setMoney();
            problem.ChangeMoney();
            problem.PrintCount(tc);
        }
    }
}

class Problem {
    Scanner sc;
    HashMap<Integer, Integer> hashMap;
    List<Integer> keySet;

    int money;

    Problem(Scanner sc) {
        this.sc = sc;
        this.hashMap = new HashMap<Integer, Integer>(){{
            put(50000, 0);  put(10000, 0);  put(5000, 0);   put(1000, 0);   put(500, 0);    put(100, 0);    put(50, 0); put(10, 0);
        }};
        this.keySet = new ArrayList<Integer>(hashMap.keySet());
        Collections.sort(keySet, Collections.reverseOrder());
    }

    void setMoney() {
        this.money = Integer.valueOf(sc.nextLine());
    }

    void ChangeMoney() {
        for(int key : keySet){
            int count = money / key;

            money -= count * key;
            hashMap.put(key, count);
        }
    }

    void PrintCount(int tc) {
        System.out.println("#" + tc);
        for(int key : keySet){
            System.out.print(hashMap.get(key) + " ");
        }
        System.out.println();
    }
}