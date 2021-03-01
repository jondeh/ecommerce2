insert into customers (
   email,
   password,
   is_admin
) values ( 
   ${email},
   ${password},
   false
)
returning email, customer_id, is_admin;