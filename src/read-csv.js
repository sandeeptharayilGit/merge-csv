import csv from "csv-parser"
import fs from "fs"

function readCSV(filename) {
    const data = [];

    return new Promise(function (fulfill, reject) {

        fs.createReadStream(filename)
            .pipe(csv())
            .on('data', (row) => {
                data.push(row)
            })
            .on('end', () => {
                fulfill(data);
                // console.log('CSV file successfully processed');
            })
            .on('error', (err) => reject(err));
    });
}

export default readCSV;