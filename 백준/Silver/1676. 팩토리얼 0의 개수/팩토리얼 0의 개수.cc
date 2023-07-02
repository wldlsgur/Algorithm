#include<stdio.h>
int main()
{
	int n, i, temp=0;
	scanf("%d",&n);
	for(i=5 ; i<=n ; i*=5)
	{
		temp += n/i;
	}
	printf("%d",temp);
	return 0;
}
