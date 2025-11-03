select ao.animal_id, ao.name
from animal_ins as ai
join animal_outs as ao
on ai.animal_id = ao.animal_id
ORDER BY DATEDIFF(ao.DATETIME, ai.DATETIME) DESC
limit 2