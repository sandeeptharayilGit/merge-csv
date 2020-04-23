import { createObjectCsvWriter } from "csv-writer";

function writeCSV(data, path) {
    const csvWriter = createObjectCsvWriter({
        path,
        header: Object.keys(data[ 0 ]).map(key => ({ id: key, title: key }))
    });

    return csvWriter.writeRecords(data)
}

export default writeCSV;