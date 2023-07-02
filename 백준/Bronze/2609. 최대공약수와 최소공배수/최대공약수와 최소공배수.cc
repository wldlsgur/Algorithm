#include<stdio.h>
int main()
{
	int a, b, x, y, temp;
	scanf("%d%d",&a,&b);
	x = a;
	y = b;
	while(y != 0)
	{
		temp = x % y;
		x = y;
		y = temp;
	}//x는 최대 공약수 
	printf("%d\n%d",x,(a*b)/x);//최소공배수는 두수 곱 나누기 최대공약수 
	return 0;
} 