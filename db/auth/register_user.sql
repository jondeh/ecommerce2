insert into customers (
   email,
   password,
   product_answer,
   home_answer,
   who_answer,
   bug_answer,
   sprayer_answer,
   lat,
   lng,
   square_feet,
   perimeter,
   who_pets,
   is_admin
) values ( 
   ${email},
   ${password},
   ${productAnswer},
   ${homeAnswer},
   ${whoAnswer},
   ${bugAnswer},
   ${sprayerAnswer},
   ${lat},
   ${lng},
   ${squareFeet},
   ${perimeter},
   ${whoPets},
   false
)
returning email, customer_id, product_answer, home_answer, who_answer, bug_answer, sprayer_answer, lat, lng, square_feet, perimeter, who_pets, is_admin;