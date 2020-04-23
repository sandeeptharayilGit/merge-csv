import mergeCSV from "./src/merge-csv";

console.time("Total Processing time");

const fileNames = [
    "BillingDetail_NEW.csv",
    "BillingDetail_NEW_2.csv",
    "BillingDetail_NEW_3.csv" ];

const sliceLength = 15000;

mergeCSV(fileNames, sliceLength);
