#include<stdio.h>
int main()
{
	int num[10001] = {0};
	int n, temp, i, j;
	while(!(1<=n && n<=10000000))
	{
		scanf("%d",&n);
	}
	for(i=0 ; i<n ; i++)
	{
		scanf("%d",&temp);
		num[temp]++;
	}
	for(i=0 ; i<10001 ; i++)
	{
		if(num[i] != 0)
		{
			for(j=0 ; j<num[i] ; j++)
			{
				printf("%d\n",i);
			}
		}
	}
	return 0;
}