### Creating a new user: 

```sql
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
```

### Create a new database

```sql
CREATE DATABASE database;
```

### Grant privilege between user and database

```sql
GRANT ALL PRIVILEGES ON database.* TO 'user'@'localhost';
```