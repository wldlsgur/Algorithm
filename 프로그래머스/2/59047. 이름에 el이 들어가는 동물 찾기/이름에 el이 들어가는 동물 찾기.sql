select ANIMAL_ID, NAME
from ANIMAL_INS
where NAME like '%el%' and animal_type = 'Dog'
ORDER BY NAME ASC
