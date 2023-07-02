#include<stdio.h>
int math(int temp);
int main()
{
	int num=0;
	
	while(!(0<num && num<=1000))
	{
		scanf("%d",&num); 
	}
	int number = math(num);
	printf("%d\n",number);
	return 0;
}
int math(int temp)
{
	int i=0, cnt=0;
	if(temp<100) return temp;
	else
	{
		for(i=100 ; i<=temp ; i++)
		{
			int x = i/100; 
			int y = (i%100)/10;
			int z = i%10;
			if(x-y == y-z)
			{
				cnt++;
			}
		}
		return 99 + cnt;
	}
}