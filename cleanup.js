import readData from "./src/read-data";
import cleanupData from "./src/cleanup-data";
import splitData from "./src/split-data";
import writeData from "./src/write-data";

import fs from 'fs';

const inputFolder = './input';

async function cleanUpCSV(fileNameList) {

    const fileName = fileNameList[0];
    console.clear();
    const filePath = `${inputFolder}/${fileName}`;
    const correctedFileName = `${fileName.split(".")[0]}_.${fileName.split(".")[1]}`
    const correctedFilePath = `${inputFolder}/${correctedFileName}`;

    let csvContent = fs
        .readFileSync(filePath)
        .toString()
        .split('\n'); // read file and convert to array by line break
    // console.log(csvContent)
    csvContent.shift(); // remove the the first element from array
    csvContent = csvContent.join('\n').replace(/(,){10,}/g, ""); // convert array back to string

    fs.writeFileSync(correctedFilePath, csvContent);
    let csvData = await readData([correctedFileName]);

    const cleanedCsvData = csvData.map(data => {
        delete data[""];
        data.Address1 = data.Address1.replace(/(\r\n|\n|\r)/gm, ", ")
        return data;
    })

    await writeData([cleanedCsvData], "HotelDetails");


    console.timeEnd("Total Processing time");
}
console.time("Total Processing time");


cleanUpCSV(["HotelDetails.csv"])
