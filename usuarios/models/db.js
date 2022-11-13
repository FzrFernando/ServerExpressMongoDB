const db = require('diskdb');
db.connect('./data', ['users'])

if (!db.users.find().length) {
    const users = [{
        "Nombre": "Fernando",
        "Apellido": "Zamora",
        "Nick": "FzrFernando",
        "Email": "fernandozamorarico@gmail.com",
        "Contraseña": "fernando"
    }];
    db.users.save(users);
 }

 module.exports = db