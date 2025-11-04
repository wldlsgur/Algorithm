SELECT SUBSTRING(product_code, 1, 2) AS category, count(*)
from product
GROUP BY SUBSTRING(product_code, 1, 2)
order by product_code