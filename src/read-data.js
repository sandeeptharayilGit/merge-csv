
import readCSV from "./read-csv";

async function readData(fileNames) {
    // console.log("--------------------------");
    console.log("--------readData---------");
    let finalData = [];
    for await (let fileName of fileNames) {
        const data = await readCSV(`input/${fileName}`);
        console.log(fileName, data.length, "lines");
        finalData = finalData.concat(data);
    }
    return finalData
}

export default readData;