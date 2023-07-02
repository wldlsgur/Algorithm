#include<stdio.h>
#include<string.h>
int main()
{
	int n=0, i, j, cnt=0;
	char temp;
	while(!(n>0 && n<=100))
	{
		scanf("%d",&n);
	}
	char alp[n][100];
	
	for(i=0 ; i<n ; i++)
	{
		scanf("%s",alp[i]);
		int check[27] = {0,};
		for(j=1 ; j<strlen(alp[i]) ; j++)
		{
			if(strlen(alp[i]) == 1) break;
			else if(alp[i][j] != alp[i][j-1])
			{
				check[alp[i][j-1]-97]++;
				if(check[alp[i][j]-97] != 0)
				{
					cnt++;
					break;
				}
			}
		}
	}
	printf("%d",n-cnt);
	return 0;
}