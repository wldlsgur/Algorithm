#include<stdio.h>
int main()
{
	int n, i, j, max=0, result=0;
	int array[1001] = {0};
	int up[1001] = {0};
	int down[1001] = {0};
	scanf("%d",&n);
	for(i=0 ; i<n ; i++)
	{
		scanf("%d",&array[i]);
	}
	for(i=0 ; i<n ; i++)
	{
		max=0;
		for(j=0 ; j<= i ; j++)
		{
			if(array[i] > array[j])
			{
				if(up[j]>max)
				{
					max = up[j];
				}
			}
		}
		up[i] = max + 1;
	}
	for(i=n-1 ; i>=0 ; i--)
	{
		max = 0;
		for(j=n-1 ; j>=i ; j--)
		{
			if(array[i] > array[j])
			{
				if(down[j]>max)
				{
					max = down[j];
				}
			}
		}
		down[i] = max + 1;
	}
	for(i=0 ; i<n ; i++)
	{
		if(result < up[i] + down[i] - 1)
		{
			result = up[i] + down[i] - 1;
		}
	}
	printf("%d",result);
	return 0;
}