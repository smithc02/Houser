UPDATE houser
SET name = $2, address = $3, city =$4, state = $5, zipcode =$6
WHERE id=$1;
