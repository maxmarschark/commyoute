INSERT INTO trans (type, name, overall, delay, crowded, smelly, u_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;
