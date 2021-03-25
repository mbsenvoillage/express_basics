const fs = require('fs');
const path = require('path');

function writeDataToFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', err => {
        if(err) console.log(err);
        console.log("File has been written to.");
    });
}

module.exports = {
    writeDataToFile
}
