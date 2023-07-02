#include<stdio.h>
int min(int a, int b);
int main()
{
	int n, i;
	scanf("%d",&n);
	int arr[1000];
	for(i=0 ; i<n ; i++)
	{
		int a, b;
		scanf("%d%d",&a, &b);
		if(a<b)
		{
			arr[i] = a * b / min(b,a);
		}
		else
		{
			arr[i] = a * b / min(a,b);
		}
	}
	for(i=0 ; i<n ; i++)
	{
		printf("%d\n", arr[i]);
	}
	return 0;
}
int min(int a, int b)
{
	int temp;
	while(b != 0)
	{
		temp = a % b;
		a = b;
		b = temp;
	}
	return a;
}