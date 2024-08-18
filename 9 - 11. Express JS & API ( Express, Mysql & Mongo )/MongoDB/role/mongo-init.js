db = db.getSiblingDB('admin');
db.createUser(
  {
    user: "adminUser",
    pwd: "adminPass",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
);

db = db.getSiblingDB('databasebima');
db.createUser(
  {
    user: "readWriteUser",
    pwd: "readWritePass",
    roles: [ { role: "readWrite", db: "yourDatabase" } ]
  }
);
