package D1;

import java.util.*;

class Solution
{
	public static void main(String args[]) throws Exception
	{
        ArrayList arrayList = new ArrayList<Integer>();
		Scanner sc = new Scanner(System.in);
		int T;
		T=sc.nextInt();
        sc.nextLine();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            int number = sc.nextInt();

            arrayList.add(number);
        }

        Collections.sort(arrayList);
        int index = arrayList.size() / 2;
        int result = (int) arrayList.get(index);

        System.out.println(result);
	}
}