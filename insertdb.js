//Generates faker.js data and writes it to json file
const fs = require('fs');
const faker = require('faker');
const path = require('path');

function fakerUserGenerator(qty) {
    let arr = [];
    for (let i = 0; i < qty; i++) {
        arr.push({
            id: i+1,
            name: faker.name.firstName() + " " + faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        })
    }
    return arr;
}

fs.writeFile(path.join(__dirname, "data.json"), JSON.stringify(fakerUserGenerator(30)), err => {
    if(err) throw err;
    console.log("File has been written to.");
});
