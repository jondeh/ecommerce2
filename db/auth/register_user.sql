insert into accounts (
   email,
   password,
   is_admin
) values ( 
   ${email},
   ${password},
   false
)
returning email, user_id, is_admin;