package D1;

import java.util.*;

class calander
{
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
        HashMap hashMap = new HashMap<Integer, Integer>(){{
            put(1, 31);
            put(2, 28);
            put(3, 31);
            put(4, 30);
            put(5, 31);
            put(6, 30);
            put(7, 31);
            put(8, 31);
            put(9, 30);
            put(10, 31);
            put(11, 30);
            put(12, 31);
        }};
		int T = sc.nextInt();
        sc.nextLine();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            String str = sc.nextLine();
            String yearStr = str.substring(0, str.length() - 4);
            String monthStr = str.substring(str.length() - 4, str.length() - 2);
            String dayStr = str.substring(str.length() - 2, str.length());
            
            int month = Integer.valueOf(monthStr);
            int day = Integer.valueOf(dayStr);

            if(month > 12 || month < 1){
                System.out.println("#" + test_case + " " + -1);
            }
            else if((int)hashMap.get(month) < day || day < 1){
                System.out.println("#" + test_case + " " + -1);
            }
            else{
                System.out.println("#" + test_case + " " + yearStr + "/" + monthStr + "/" + dayStr);
            }
        }
	}
}