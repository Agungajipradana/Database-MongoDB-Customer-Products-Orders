// Membuat collection "customers"
db.createCollection("customers");
// Membuat collection "products"
db.createCollection("products");
// Membuat collection "orders"
db.createCollection("orders");

/*
Notes: collection pada mongodb mirip dengan tabel dalam RDBMS (postgres, mySQL, dll)
*/

// melihat informasi collection
db.getCollectionNames();

// melihat data pada collection "customers"
db.customers.find();
