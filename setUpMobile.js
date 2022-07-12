import readData from "./src/read-data";
import cleanupData from "./src/cleanup-data";
import splitData from "./src/split-data";
import writeData from "./src/write-data";

import fs from 'fs';

const inputFolder = './input';

async function setUpMobile(fileName) {

    console.clear();
    const filePath = `${fileName}.csv`;
    // const correctedFileName = `${fileName.split(".")[ 0 ]}_.${fileName.split(".")[ 1 ]}`
    // const correctedFilePath = `${inputFolder}/${correctedFileName}`;

    let mobileData = await readData([filePath]);

    console.log(mobileData.length)

    mobileData.forEach(data =>{
        if(data.Secondary_Source==="Mobile"){
            console.log(data.Secondary_Source,data.Channel)
            data.Channel="Mobile Web"
        }
    })
    await writeData([ mobileData ], `${fileName}_Fixed`);

    // let csvContent = fs
    //     .readFileSync(filePath)
    //     .toString()
    //     .split('\n'); // read file and convert to array by line break
    // // console.log(csvContent)
    // csvContent.shift(); // remove the the first element from array
    // csvContent = csvContent.join('\n').replace(/(,){10,}/g, ""); // convert array back to string

    // fs.writeFileSync(correctedFilePath, csvContent);
    // let csvData = await readData([correctedFileName]);

    // const cleanedCsvData = csvData.map(data => {
    //     delete data[ "" ];
    //     return data;
    // })

    // await writeData([ cleanedCsvData ], "HotelDetails");


    console.timeEnd("Total Processing time");
}
console.time("Total Processing time");


setUpMobile("BillingDetail_NEW")
