import writeCSV from "./write-csv";
async function writeData(multiArray, baseFileName) {
    console.log("--------------------------");
    console.log("--------writeData---------");
    return new Promise(async (resolve)=>{
        let counter=1;
        for await (let data of multiArray) {
            let fileName = `output/${baseFileName}_${counter++}.csv`;
            await writeCSV(data, fileName);
            console.log(fileName, "created");
        }
        resolve();
    });
   

}

export default writeData;