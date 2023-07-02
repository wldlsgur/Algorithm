#include<stdio.h>
int main()
{
	int i, j, city, sum=0;
	scanf("%d",&city);
	int distance[city-1];//거리
	int oil[city];//기름 값 
	for(i=0 ; i<city-1 ; i++)
	{
		scanf("%d",&distance[i]);//거리 입력 
	}
	for(i=0 ; i<city ; i++)
	{
		scanf("%d",&oil[i]);//기름 입력 
	}
	int temp = oil[0];//제일 싼 기릅 값 
	
	for(i=0 ; i<city-1 ; i++)
	{
		if(oil[i] < temp)//전의 기름 값이 더쌀때 
		{
			temp = oil[i];//전의 기릅 값으로 기억 
		}
		sum += temp * distance[i];//제일 싼 기름 값으로 거리를 곱한다 
	}
	printf("%d",sum);
	return 0;
}