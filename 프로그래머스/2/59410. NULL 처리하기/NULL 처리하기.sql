select 
    animal_type, 
    COALESCE(name, 'No name') AS name,
    sex_upon_intake

from animal_ins
order by animal_id asc