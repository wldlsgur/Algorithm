#include<stdio.h>
int main()
{
	int n=0, i, j, x=0, y=0, k=0;
	while(!(2<=n && 50>=n))
	{
		//printf("N입력 : ");
		scanf("%d",&n);
	}
	int body[n][3];
	
	for(i=0 ; i<n ; i++)
	{
		x = 0;
		y = 0;
		body[i][2] = 1;
		while(!(10<=x && 200>=x) && !(10<=y && 200>=y))
		{
			//printf("X,Y 입력 : "); 
			scanf("%d%d",&x,&y);
		}
		body[i][0] = x;
		body[i][1] = y; 	
	}
	
	for(i=0 ; i<n ; i++)
	{
		int count = 1;
		for(j=0 ; j<n ; j++)
		{
			if(body[i][0] < body[j][0] && body[i][1] < body[j][1])
			{
				body[i][2]++;
			}
		}
		printf("%d ",body[i][2]);
	}
	return 0;	
}
