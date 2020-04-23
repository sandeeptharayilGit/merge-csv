import readData from "./read-data";
import cleanupData from "./cleanup-data";
import splitData from "./split-data";
import writeData from "./write-data";

async function mergeCSV(fileNames, sliceLength) {
    console.clear();
    let finalData = await readData(fileNames);

    finalData = cleanupData(finalData);

    const splitArray = splitData(finalData, sliceLength);
    await writeData(splitArray, "New_Billing");
    console.timeEnd("Total Processing time");
} 
console.time("Total Processing time");


export default mergeCSV;
