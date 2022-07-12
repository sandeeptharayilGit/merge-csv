import readData from "./read-data";
import cleanupData from "./cleanup-data";
import splitData from "./split-data";
import writeData from "./write-data";

// const columnsToBeRemoved=["Chain_Name","Hotel_Name","Description","Guest_First_Name","Guest_Last_Name","Travel_Agency_Street_Address"];
async function mergeCSV(fileNames, sliceLength) {
    console.clear();
    let finalData = await readData(fileNames);

    finalData = cleanupData(finalData);

    let mobileDataCounter=0;
    finalData.forEach(data =>{
        if(data.Secondary_Source==="Mobile" && data.Channel==="Booking Engine"){
            mobileDataCounter++;
            data.Channel="Mobile Web"
        }
        
        // columnsToBeRemoved.forEach(columnName =>data[columnName]="") 

    })

    console.log("mobileDataCounter: " + mobileDataCounter);

    const splitArray = splitData(finalData, sliceLength);
    await writeData(splitArray, "New_Billing");
    console.timeEnd("Total Processing time");
} 
console.time("Total Processing time");


export default mergeCSV;
