# Friendship Database design

https://stackoverflow.com/a/2911606/8742144

```sql
create table 
friendship(
user bigint, 
friend bigint,
primary key(user, friend),
key(friend, user),
constraint `fk_user` foreign key (user) references user(id),
constraint `fk_friend` foreign key (friend) references user(id)
);
```
When user 1 sends a friendship request to user 2, do

```sql
insert into friendship (user, friend) values (1,2);
```
If user 2 denies the request,
```sql
delete from friendship where user = 1 and friend = 2;
```

if user 2 accepts it:
```
insert into friendship (user, friend) values (2,1);
```

Then, a friendship can be found this way:
```
select f1.* 
from friendship f1
inner join friendship f2 on f1.user = f2.friend and f1.friend = f2.user;
```
You can make a view with this last query, it will help you query-ing for users' friends, or even friends of friends.
